import React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';

const categories = [
  { key: 'onboarding', label: '✅ Onboarding' },
  { key: 'auth', label: '✅ Auth' },
  { key: 'firstTime', label: '✅ First Time Users' },
  { key: 'guide', label: '✅ Guide for Users' },
  { key: 'home', label: '✅ Home Flow' },
  { key: 'prepare', label: 'Prepare' },
  { key: 'community', label: 'Community' },
  { key: 'awareness', label: 'Awareness' },
  { key: 'modals', label: 'Modals' },
];

const routesMap = {
  onboarding: [
    'Splash','WhatSociusIs','WhatSociusIsNot','Principles','CommunityPrinciples',
    'ParticipationChoice','IdentityVerification','BeforeContinue','Subscription',
    'ProfileReview','RequestReview','VerificationAttention'
  ],
  auth: [
    'PhoneVerification','OTPForm','SelfieVerification','ProfileInfo','VerificationReview'
  ],
  firstTime: [
    'Availability','AvailabilityRoles','BeingAvailable','Permission','EmergencyContacts'
  ],
  guide: [
    'YourRole','NoObligation','SafetyFirst','PublicSpaces','AfterLeave','IfYouSpeak',
    'IfPolice','ProtectYourself','FeelsWrong','EmergencyContacted'
  ],
  home: [
    'HomeScreen','AccountAccess','ProfileUnderReview','Settings','DataPrivacy','YourDataAccount',
    'SubscriptionManage','SubscriptionStatus','HelpSupport','ConnectionIssue','ReportConcern','PrepareStayReady','ProfileScreen'
  ],
  prepare: [
    'SafetyTips','WhenToAskPresence'
  ],
  community: [
    'CommunityAround','AskLocalHelp','HelpType','AddDetails','ReviewRequest','RequestActive',
    'PeopleAware','RequestConfirmation','CancelRequest','AwarenessProgress','ClosingRequest',
    'MatchingMap','StayAway','SomeoneNeedsHelp','LocalRequest','StartConcern','SteppedAway',
    'StatusShared','NearbyShared'
  ],
  awareness: [
    'WhatsHappening','CreateAwareness','BeingFollowed','UnsafeWalk','BloodNeeded','CarIssue',
    'BeforeShare','ShareLocation','NearDubaiedArea','RequestShared','AwarenessShared','MultiplePeople',
    'PeopleList','SafetyGuidance','NotAlone','SafetyComesFirst','BeingHereOptional','BeingHereChoice',
    'ObserveOnly','AwarenessClosed','RequestClosed','ThankYouClosing','HighRiskArea','NearbyMap',
    'SituationShared','SomeoneConcern','ViewDetailsIgnore','Reminder','EmergencyHelp'
  ],
  modals: [
    'CancelRequestModal'
  ],
};

const FlowLauncherScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header 
        title="Flows" 
        onBackPress={() => navigation.goBack()}
        style={{ borderBottomWidth: 0 }}
      />
      
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.grid}>
          {categories.map((cat, index) => (
            <View key={cat.key} style={styles.gridItem}>
              <Button
                title={`${index + 1}. ${cat.label}`}
                onPress={() => {
                  navigation.navigate('DevRoutesMap', {
                    title: cat.label,
                    routes: routesMap[cat.key] || [],
                  });
                }}
                variant="white"
                size="small"
                fullWidth
                style={{ borderRadius: 0 }}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    flexGrow: 0,
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 20,
  },
  grid: {
    gap: 8,
  },
  gridItem: {
    marginBottom: 2,
  },
});

export default FlowLauncherScreen;
