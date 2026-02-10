#!/usr/bin/env bash
set -euo pipefail

GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
NC='\033[0m'

API_HOST=${API_HOST:-127.0.0.1}
API_PORT=${API_PORT:-8000}
PROXY_PORT=${PROXY_PORT:-8085}
ADMIN_PORT=${ADMIN_PORT:-3000}

HOST_OVERRIDE=${1:-}
if [[ -n "${HOST_OVERRIDE}" ]]; then
  API_HOST="${HOST_OVERRIDE}"
fi

echo -e "${BLUE}🚀 Starting Socius (Admin + App + Backend)${NC}"
echo -e "${YELLOW}Using host: ${API_HOST} | Laravel:${API_PORT} | Proxy:${PROXY_PORT} | Admin:${ADMIN_PORT}${NC}"

cleanup() {
  echo -e "${RED}\n🛑 Stopping all services...${NC}"
  [[ -n "${LARAVEL_PID:-}" ]] && kill "${LARAVEL_PID}" 2>/dev/null || true
  [[ -n "${PROXY_PID:-}" ]] && kill "${PROXY_PID}" 2>/dev/null || true
  [[ -n "${ADMIN_PID:-}" ]] && kill "${ADMIN_PID}" 2>/dev/null || true
  exit 0
}
trap cleanup SIGINT SIGTERM

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "${ROOT_DIR}"

echo -e "${GREEN}1. Starting Laravel Backend (Port ${API_PORT})...${NC}"
pushd SociusBackendApi >/dev/null
php artisan serve --host="${API_HOST}" --port="${API_PORT}" >/dev/null 2>&1 &
LARAVEL_PID=$!
popd >/dev/null
echo "   ✅ Laravel running (PID: ${LARAVEL_PID}) at http://${API_HOST}:${API_PORT}"

echo -e "${GREEN}2. Starting Network Proxy (Port ${PROXY_PORT})...${NC}"
pushd scripts >/dev/null
if ! node -e "require('http-proxy')" >/dev/null 2>&1; then
  echo "   📦 Installing proxy dependency (http-proxy)..."
  npm init -y >/dev/null 2>&1 || true
  npm install http-proxy >/dev/null 2>&1
fi
TARGET="http://${API_HOST}:${API_PORT}" PROXY_PORT="${PROXY_PORT}" node proxy.cjs >/dev/null 2>&1 &
PROXY_PID=$!
popd >/dev/null
echo "   ✅ Proxy running (PID: ${PROXY_PID}) at http://127.0.0.1:${PROXY_PORT} → ${API_HOST}:${API_PORT}"

echo -e "${GREEN}3. Starting React Admin (Port ${ADMIN_PORT})...${NC}"
pushd SociusAdmin >/dev/null
if [[ ! -d node_modules ]]; then
  echo "   📦 Installing Admin dependencies..."
  npm install >/dev/null 2>&1
fi
REACT_APP_SOCIUS_API_BASE="http://${API_HOST}:${PROXY_PORT}" HOST="${API_HOST}" PORT="${ADMIN_PORT}" npm run start >/dev/null 2>&1 &
ADMIN_PID=$!
popd >/dev/null
echo "   ✅ Admin running (PID: ${ADMIN_PID}) at http://${API_HOST}:${ADMIN_PORT}"

echo -e "${GREEN}4. Starting Mobile App (Expo)...${NC}"
echo -e "${BLUE}📱 Scan the QR code in your terminal with Expo Go${NC}"
pushd SociusApp >/dev/null
if [[ ! -d node_modules ]]; then
  echo "   📦 Installing App dependencies..."
  npm install >/dev/null 2>&1
fi
export SOCIUS_API_BASE="http://${API_HOST}:${PROXY_PORT}"
npx expo start --lan -c
popd >/dev/null

wait
