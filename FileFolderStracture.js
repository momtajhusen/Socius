safety-app/
├── app.json
├── package.json
├── babel.config.js
├── metro.config.js
├── index.js
├── .env.example
│
├── src/
│   ├── navigation/
│   │   ├── RootNavigator.js
│   │   ├── AuthNavigator.js
│   │   ├── UserNavigator.js
│   │   ├── VolunteerNavigator.js
│   │   └── AdminNavigator.js
│   │
│   ├── screens/
│   │   ├── auth/
│   │   │   ├── SplashScreen.js
│   │   │   ├── LoginScreen.js
│   │   │   ├── OTPVerificationScreen.js
│   │   │   ├── RoleSelectionScreen.js
│   │   │   └── OnboardingScreen.js
│   │   │
│   │   ├── user/
│   │   │   ├── UserHomeScreen.js
│   │   │   ├── HelpRequestScreen.js
│   │   │   ├── IncidentDetailScreen.js
│   │   │   ├── IncidentHistoryScreen.js
│   │   │   ├── UserProfileScreen.js
│   │   │   ├── EmergencyContactsScreen.js
│   │   │   └── ReportAbuseScreen.js
│   │   │
│   │   ├── volunteer/
│   │   │   ├── VolunteerHomeScreen.js
│   │   │   ├── AvailableIncidentsScreen.js
│   │   │   ├── IncidentAcceptScreen.js
│   │   │   ├── RespondingScreen.js
│   │   │   ├── VolunteerProfileScreen.js
│   │   │   ├── MyAssignmentsScreen.js
│   │   │   └── VolunteerOnboardingScreen.js
│   │   │
│   │   └── admin/
│   │       ├── AdminDashboardScreen.js
│   │       ├── IncidentReviewScreen.js
│   │       ├── VolunteerManagementScreen.js
│   │       ├── ClusterControlScreen.js
│   │       ├── AnalyticsScreen.js
│   │       └── AdminSettingsScreen.js
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.js
│   │   │   ├── TextInput.js
│   │   │   ├── Card.js
│   │   │   ├── Modal.js
│   │   │   ├── LoadingSpinner.js
│   │   │   ├── Header.js
│   │   │   ├── BottomSheet.js
│   │   │   └── Toast.js
│   │   │
│   │   ├── user/
│   │   │   ├── HelpButton.js
│   │   │   ├── ConcernButton.js
│   │   │   ├── IncidentCard.js
│   │   │   ├── MapViewComponent.js
│   │   │   ├── VolunteerArrivalTimer.js
│   │   │   └── StatusIndicator.js
│   │   │
│   │   ├── volunteer/
│   │   │   ├── IncidentAcceptButton.js
│   │   │   ├── IncidentRejectButton.js
│   │   │   ├── NavigationGuide.js
│   │   │   ├── CustomerDetailCard.js
│   │   │   ├── ResolutionOptions.js
│   │   │   └── VolunteerTimer.js
│   │   │
│   │   └── admin/
│   │       ├── IncidentTable.js
│   │       ├── VolunteerList.js
│   │       ├── ClusterMap.js
│   │       ├── StatCard.js
│   │       └── FilterPanel.js
│   │
│   ├── services/
│   │   ├── api/
│   │   │   ├── client.js
│   │   │   ├── auth.api.js
│   │   │   ├── incident.api.js
│   │   │   ├── volunteer.api.js
│   │   │   ├── user.api.js
│   │   │   └── admin.api.js
│   │   │
│   │   ├── firebase/
│   │   │   ├── config.js
│   │   │   ├── messaging.js
│   │   │   └── database.js
│   │   │
│   │   ├── location/
│   │   │   ├── geolocation.service.js
│   │   │   └── cluster.service.js
│   │   │
│   │   ├── payment/
│   │   │   └── razorpay.service.js
│   │   │
│   │   └── storage/
│   │       └── asyncStorage.service.js
│   │
│   ├── state/
│   │   ├── redux/
│   │   │   ├── store.js
│   │   │   ├── slices/
│   │   │   │   ├── authSlice.js
│   │   │   │   ├── incidentSlice.js
│   │   │   │   ├── userSlice.js
│   │   │   │   ├── volunteerSlice.js
│   │   │   │   └── adminSlice.js
│   │   │   └── thunks/
│   │   │       ├── authThunks.js
│   │   │       └── incidentThunks.js
│   │   │
│   │   └── hooks/
│   │       ├── useAuth.js
│   │       ├── useIncident.js
│   │       ├── useLocation.js
│   │       └── useTheme.js
│   │
│   ├── utils/
│   │   ├── constants.js
│   │   ├── validators.js
│   │   ├── formatters.js
│   │   ├── helpers.js
│   │   └── errors.js
│   │
│   ├── theme/
│   │   ├── colors.js
│   │   ├── typography.js
│   │   ├── spacing.js
│   │   ├── theme.js
│   │   └── darkTheme.js
│   │
│   ├── assets/
│   │   ├── images/
│   │   │   ├── splash.png
│   │   │   ├── logo.png
│   │   │   └── illustrations/
│   │   │
│   │   ├── icons/
│   │   │   ├── help.svg
│   │   │   ├── concern.svg
│   │   │   ├── location.svg
│   │   │   └── ...
│   │   │
│   │   └── fonts/
│   │       └── custom-fonts/
│   │
│   └── App.js
│
├── __tests__/
│   ├── components/
│   ├── services/
│   └── utils/
│
└── .env.example