HOST ?= 127.0.0.1
API_PORT ?= 8000
PROXY_PORT ?= 8085
ADMIN_PORT ?= 3000

.PHONY: run
run:
	@chmod +x scripts/run-all.sh
	@API_HOST=$(HOST) API_PORT=$(API_PORT) PROXY_PORT=$(PROXY_PORT) ADMIN_PORT=$(ADMIN_PORT) ./scripts/run-all.sh $(HOST)

