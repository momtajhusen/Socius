import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Bottom Tab Navigator
import BottomTabNavigator from './BottomTabNavigator';

// ==================== AUTH SCREENS ====================
import PhoneVerificationScreen from '../screens/auth/PhoneVerificationScreen';
// import OTPScreen from '../screens/auth/OTPScreen';
import OTPFormScreen from '../screens/auth/OTPFormScreen';
import SelfieVerificationScreen from '../screens/auth/SelfieVerificationScreen';
import ProfileInfoScreen from '../screens/auth/ProfileInfoScreen';
import VerificationReviewScreen from '../screens/auth/VerificationReviewScreen';

// ==================== ONBOARDING SCREENS (16) ====================
import SplashScreen from '../screens/onboarding/SplashScreen';
import WelcomeScreen from '../screens/onboarding/WelcomeScreen';
import WhatSociusIsScreen from '../screens/onboarding/WhatSociusIsScreen';
import WhatSociusIsNotScreen from '../screens/onboarding/WhatSociusIsNotScreen';
import PrinciplesScreen from '../screens/onboarding/PrinciplesScreen';
import CommunityPrinciplesScreen from '../screens/onboarding/CommunityPrinciplesScreen';
import ParticipationChoiceScreen from '../screens/onboarding/ParticipationChoiceScreen';
import IdentityVerificationScreen from '../screens/onboarding/IdentityVerificationScreen';
import BeforeContinueScreen from '../screens/onboarding/BeforeContinueScreen';
import SubscriptionScreen from '../screens/onboarding/SubscriptionScreen';
import ProfileReviewScreen from '../screens/onboarding/ProfileReviewScreen';
import RequestReviewScreen from '../screens/onboarding/RequestReviewScreen';
import VerificationAttentionScreen from '../screens/onboarding/VerificationAttentionScreen';

// ==================== FIRST TIME USER SCREENS (5) ====================
import AvailabilityScreen from '../screens/firstTime/AvailabilityScreen';
import AvailabilityRolesScreen from '../screens/firstTime/AvailabilityRolesScreen';
import BeingAvailableScreen from '../screens/firstTime/BeingAvailableScreen';
import PermissionScreen from '../screens/firstTime/PermissionScreen';
import EmergencyContactsScreen from '../screens/firstTime/EmergencyContactsScreen';

// ==================== GUIDE SCREENS (10) ====================
import YourRoleScreen from '../screens/guide/YourRoleScreen';
import NoObligationScreen from '../screens/guide/NoObligationScreen';
import SafetyFirstScreen from '../screens/guide/SafetyFirstScreen';
import PublicSpacesScreen from '../screens/guide/PublicSpacesScreen';
import AfterLeaveScreen from '../screens/guide/AfterLeaveScreen';
import IfYouSpeakScreen from '../screens/guide/IfYouSpeakScreen';
import IfPoliceScreen from '../screens/guide/IfPoliceScreen';
import ProtectYourselfScreen from '../screens/guide/ProtectYourselfScreen';
import FeelsWrongScreen from '../screens/guide/FeelsWrongScreen';
import EmergencyContactedScreen from '../screens/guide/EmergencyContactedScreen';

// ==================== HOME FLOW SCREENS (13) ====================
import HomeScreen from '../screens/home/HomeScreen';
import AccountAccessScreen from '../screens/home/AccountAccessScreen';
import ProfileUnderReviewScreen from '../screens/home/ProfileUnderReviewScreen';
import SettingsScreen from '../screens/home/SettingsScreen';
import DataPrivacyScreen from '../screens/home/DataPrivacyScreen';
import YourDataAccountScreen from '../screens/home/YourDataAccountScreen';
import SubscriptionManageScreen from '../screens/home/SubscriptionManageScreen';
import SubscriptionStatusScreen from '../screens/home/SubscriptionStatusScreen';
import HelpSupportScreen from '../screens/home/HelpSupportScreen';
import ConnectionIssueScreen from '../screens/home/ConnectionIssueScreen';
import ReportConcernScreen from '../screens/home/ReportConcernScreen';
import PrepareStayReadyScreen from '../screens/home/PrepareStayReadyScreen';

// ==================== PREPARE TAB SCREENS ====================
import SafetyTipsScreen from '../screens/prepare/SafetyTipsScreen';
import WhenToAskPresenceScreen from '../screens/prepare/WhenToAskPresenceScreen';

// ==================== COMMUNITY SCREENS (20) ====================
import CommunityAroundScreen from '../screens/community/CommunityAroundScreen';
import AskLocalHelpScreen from '../screens/community/AskLocalHelpScreen';
import HelpTypeScreen from '../screens/community/HelpTypeScreen';
import AddDetailsScreen from '../screens/community/AddDetailsScreen';
import ReviewRequestScreen from '../screens/community/ReviewRequestScreen';
import RequestActiveScreen from '../screens/community/RequestActiveScreen';
import PeopleAwareScreen from '../screens/community/PeopleAwareScreen';
import RequestConfirmationScreen from '../screens/community/RequestConfirmationScreen';
import CancelRequestScreen from '../screens/community/CancelRequestScreen';
import AwarenessProgressScreen from '../screens/community/AwarenessProgressScreen';
import ClosingRequestScreen from '../screens/community/ClosingRequestScreen';
import MatchingMapScreen from '../screens/community/MatchingMapScreen';
import StayAwayScreen from '../screens/community/StayAwayScreen';
import SomeoneNeedsHelpScreen from '../screens/community/SomeoneNeedsHelpScreen';
import LocalRequestScreen from '../screens/community/LocalRequestScreen';
import StartConcernScreen from '../screens/community/StartConcernScreen';
import SteppedAwayScreen from '../screens/community/SteppedAwayScreen';
import StatusSharedScreen from '../screens/community/StatusSharedScreen';
import NearbySharedScreen from '../screens/community/NearbySharedScreen';

// ==================== AWARENESS/PRESENCE SCREENS (30+) ====================
import WhatsHappeningScreen from '../screens/awareness/WhatsHappeningScreen';
import CreateAwarenessScreen from '../screens/awareness/CreateAwarenessScreen';
import BeingFollowedScreen from '../screens/awareness/BeingFollowedScreen';
import UnsafeWalkScreen from '../screens/awareness/UnsafeWalkScreen';
import BloodNeededScreen from '../screens/awareness/BloodNeededScreen';
import CarIssueScreen from '../screens/awareness/CarIssueScreen';
import BeforeShareScreen from '../screens/awareness/BeforeShareScreen';
import ShareLocationScreen from '../screens/awareness/ShareLocationScreen';
import NearDubaiedAreaScreen from '../screens/awareness/NearDubaiedAreaScreen';
import RequestSharedScreen from '../screens/awareness/RequestSharedScreen';
import AwarenessSharedScreen from '../screens/awareness/AwarenessSharedScreen';
import MultiplePeopleScreen from '../screens/awareness/MultiplePeopleScreen';
import PeopleListScreen from '../screens/awareness/PeopleListScreen';
import SafetyGuidanceScreen from '../screens/awareness/SafetyGuidanceScreen';
import NotAloneScreen from '../screens/awareness/NotAloneScreen';
import SafetyComesFirstScreen from '../screens/awareness/SafetyComesFirstScreen';
import BeingHereOptionalScreen from '../screens/awareness/BeingHereOptionalScreen';
import BeingHereChoiceScreen from '../screens/awareness/BeingHereChoiceScreen';
import ObserveOnlyScreen from '../screens/awareness/ObserveOnlyScreen';
import AwarenessClosedScreen from '../screens/awareness/AwarenessClosedScreen';
import RequestClosedScreen from '../screens/awareness/RequestClosedScreen';
import ThankYouClosingScreen from '../screens/awareness/ThankYouClosingScreen';
import HighRiskAreaScreen from '../screens/awareness/HighRiskAreaScreen';
import NearbyMapScreen from '../screens/awareness/NearbyMapScreen';
import SituationSharedScreen from '../screens/awareness/SituationSharedScreen';
import SomeoneConcernScreen from '../screens/awareness/SomeoneConcernScreen';
import ViewDetailsIgnoreScreen from '../screens/awareness/ViewDetailsIgnoreScreen';
import ReminderScreen from '../screens/awareness/ReminderScreen';
import EmergencyHelpScreen from '../screens/awareness/EmergencyHelpScreen';
import CancelRequestModal from '../screens/awareness/CancelRequestModal';
import FlowLauncherScreen from '../screens/dev/FlowLauncherScreen';
import RoutesMapScreen from '../screens/dev/RoutesMapScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        contentStyle: { backgroundColor: '#FFFFFF' },
      }}
    >
      {/* ==================== SPLASH & ONBOARDING ==================== */}
      <Stack.Screen 
        name="Splash" 
        component={SplashScreen}
        options={{ animation: 'fade' }}
      />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="WhatSociusIs" component={WhatSociusIsScreen} />
      <Stack.Screen name="WhatSociusIsNot" component={WhatSociusIsNotScreen} />
      <Stack.Screen name="Principles" component={PrinciplesScreen} />
      <Stack.Screen name="CommunityPrinciples" component={CommunityPrinciplesScreen} />
      <Stack.Screen name="ParticipationChoice" component={ParticipationChoiceScreen} />
      <Stack.Screen name="IdentityVerification" component={IdentityVerificationScreen} />
      <Stack.Screen name="BeforeContinue" component={BeforeContinueScreen} />
      <Stack.Screen name="Subscription" component={SubscriptionScreen} />
      <Stack.Screen name="ProfileReview" component={ProfileReviewScreen} />
      <Stack.Screen name="RequestReview" component={RequestReviewScreen} />
      <Stack.Screen name="VerificationAttention" component={VerificationAttentionScreen} />

      {/* ==================== AUTHENTICATION ==================== */}
      <Stack.Screen name="PhoneVerification" component={PhoneVerificationScreen} />
      {/* <Stack.Screen name="OTP" component={OTPScreen} /> */}
      <Stack.Screen name="OTPForm" component={OTPFormScreen} />
      <Stack.Screen name="SelfieVerification" component={SelfieVerificationScreen} />
      <Stack.Screen name="ProfileInfo" component={ProfileInfoScreen} />
      <Stack.Screen name="VerificationReview" component={VerificationReviewScreen} />

      {/* ==================== FIRST TIME USER FLOW ==================== */}
      <Stack.Screen name="Availability" component={AvailabilityScreen} />
      <Stack.Screen name="AvailabilityRoles" component={AvailabilityRolesScreen} />
      <Stack.Screen name="BeingAvailable" component={BeingAvailableScreen} />
      <Stack.Screen name="Permission" component={PermissionScreen} />
      <Stack.Screen name="EmergencyContacts" component={EmergencyContactsScreen} />

      {/* ==================== USER GUIDE FLOW ==================== */}
      <Stack.Screen name="YourRole" component={YourRoleScreen} />
      <Stack.Screen name="NoObligation" component={NoObligationScreen} />
      <Stack.Screen name="SafetyFirst" component={SafetyFirstScreen} />
      <Stack.Screen name="PublicSpaces" component={PublicSpacesScreen} />
      <Stack.Screen name="AfterLeave" component={AfterLeaveScreen} />
      <Stack.Screen name="IfYouSpeak" component={IfYouSpeakScreen} />
      <Stack.Screen name="IfPolice" component={IfPoliceScreen} />
      <Stack.Screen name="ProtectYourself" component={ProtectYourselfScreen} />
      <Stack.Screen name="FeelsWrong" component={FeelsWrongScreen} />
      <Stack.Screen name="EmergencyContacted" component={EmergencyContactedScreen} />

      {/* ==================== MAIN APP (BOTTOM TABS) ==================== */}
      <Stack.Screen 
        name="MainApp" 
        component={BottomTabNavigator}
        options={{ animation: 'fade' }}
      />

      {/* ==================== DEV / FLOW LAUNCHER ==================== */}
      <Stack.Screen 
        name="DevLauncher" 
        component={FlowLauncherScreen}
        options={{ animation: 'fade' }}
      />
      <Stack.Screen 
        name="DevRoutesMap" 
        component={RoutesMapScreen}
        options={{ animation: 'fade' }}
      />

      {/* ==================== HOME FLOW SCREENS ==================== */}
    
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="AccountAccess" component={AccountAccessScreen} />
      <Stack.Screen name="ProfileUnderReview" component={ProfileUnderReviewScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="DataPrivacy" component={DataPrivacyScreen} />
      <Stack.Screen name="YourDataAccount" component={YourDataAccountScreen} />
      <Stack.Screen name="SubscriptionManage" component={SubscriptionManageScreen} />
      <Stack.Screen name="SubscriptionStatus" component={SubscriptionStatusScreen} />
      <Stack.Screen name="HelpSupport" component={HelpSupportScreen} />
      <Stack.Screen name="ConnectionIssue" component={ConnectionIssueScreen} />
      <Stack.Screen name="ReportConcern" component={ReportConcernScreen} />
      <Stack.Screen name="PrepareStayReady" component={PrepareStayReadyScreen} />

      {/* ==================== PREPARE TAB SCREENS ==================== */}
      <Stack.Screen name="SafetyTips" component={SafetyTipsScreen} />
      <Stack.Screen name="WhenToAskPresence" component={WhenToAskPresenceScreen} />

      {/* ==================== COMMUNITY FLOW SCREENS ==================== */}
      <Stack.Screen name="CommunityAround" component={CommunityAroundScreen} />
      <Stack.Screen name="AskLocalHelp" component={AskLocalHelpScreen} />
      <Stack.Screen name="HelpType" component={HelpTypeScreen} />
      <Stack.Screen name="AddDetails" component={AddDetailsScreen} />
      <Stack.Screen name="ReviewRequest" component={ReviewRequestScreen} />
      <Stack.Screen name="RequestActive" component={RequestActiveScreen} />
      <Stack.Screen name="PeopleAware" component={PeopleAwareScreen} />
      <Stack.Screen name="RequestConfirmation" component={RequestConfirmationScreen} />
      <Stack.Screen name="CancelRequest" component={CancelRequestScreen} />
      <Stack.Screen name="AwarenessProgress" component={AwarenessProgressScreen} />
      <Stack.Screen name="ClosingRequest" component={ClosingRequestScreen} />
      <Stack.Screen name="MatchingMap" component={MatchingMapScreen} />
      <Stack.Screen name="StayAway" component={StayAwayScreen} />
      <Stack.Screen name="SomeoneNeedsHelp" component={SomeoneNeedsHelpScreen} />
      <Stack.Screen name="LocalRequest" component={LocalRequestScreen} />
      <Stack.Screen name="StartConcern" component={StartConcernScreen} />
      <Stack.Screen name="SteppedAway" component={SteppedAwayScreen} />
      <Stack.Screen name="StatusShared" component={StatusSharedScreen} />
      <Stack.Screen name="NearbyShared" component={NearbySharedScreen} />

      {/* ==================== AWARENESS/PRESENCE FLOW SCREENS ==================== */}
      <Stack.Screen name="WhatsHappening" component={WhatsHappeningScreen} />
      <Stack.Screen name="CreateAwareness" component={CreateAwarenessScreen} />
      <Stack.Screen name="BeingFollowed" component={BeingFollowedScreen} />
      <Stack.Screen name="UnsafeWalk" component={UnsafeWalkScreen} />
      <Stack.Screen name="BloodNeeded" component={BloodNeededScreen} />
      <Stack.Screen name="CarIssue" component={CarIssueScreen} />
      <Stack.Screen name="BeforeShare" component={BeforeShareScreen} />
      <Stack.Screen name="ShareLocation" component={ShareLocationScreen} />
      <Stack.Screen name="NearDubaiedArea" component={NearDubaiedAreaScreen} />
      <Stack.Screen name="RequestShared" component={RequestSharedScreen} />
      <Stack.Screen name="AwarenessShared" component={AwarenessSharedScreen} />
      <Stack.Screen name="MultiplePeople" component={MultiplePeopleScreen} />
      <Stack.Screen name="PeopleList" component={PeopleListScreen} />
      <Stack.Screen name="SafetyGuidance" component={SafetyGuidanceScreen} />
      <Stack.Screen name="NotAlone" component={NotAloneScreen} />
      <Stack.Screen name="SafetyComesFirst" component={SafetyComesFirstScreen} />
      <Stack.Screen name="BeingHereOptional" component={BeingHereOptionalScreen} />
      <Stack.Screen name="BeingHereChoice" component={BeingHereChoiceScreen} />
      <Stack.Screen name="ObserveOnly" component={ObserveOnlyScreen} />
      <Stack.Screen name="AwarenessClosed" component={AwarenessClosedScreen} />
      <Stack.Screen name="RequestClosed" component={RequestClosedScreen} />
      <Stack.Screen name="ThankYouClosing" component={ThankYouClosingScreen} />
      <Stack.Screen name="HighRiskArea" component={HighRiskAreaScreen} />
      <Stack.Screen name="NearbyMap" component={NearbyMapScreen} />
      <Stack.Screen name="SituationShared" component={SituationSharedScreen} />
      <Stack.Screen name="SomeoneConcern" component={SomeoneConcernScreen} />
      <Stack.Screen name="ViewDetailsIgnore" component={ViewDetailsIgnoreScreen} />
      <Stack.Screen name="Reminder" component={ReminderScreen} />
      <Stack.Screen name="EmergencyHelp" component={EmergencyHelpScreen} />
      
      {/* ==================== MODALS ==================== */}
      <Stack.Screen 
        name="CancelRequestModal" 
        component={CancelRequestModal}
        options={{ 
          presentation: 'modal',
          animation: 'slide_from_bottom'
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
