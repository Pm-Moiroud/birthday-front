import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { mainStyle } from '../styles/main';
import useGeneralStore from '../store';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { Formik } from 'formik';
import { formikUserDefault } from '../types/Formik';

import UserForm from '../components/setting/UserForm';
import SettingButtons from '../components/setting/SettingButtons';
import SwalWarning from '../components/shared/SwalWarning';

export default function Setting() {
  const {
    currentUser,
    handleUpdateUser,
    isSwallVisible,
    setIsSwallVisible,
    handleDeleteUser,
    handleLogout,
  } = useGeneralStore();
  const bottomBarHeight = useBottomTabBarHeight();
  const screenHeight = Dimensions.get('window').height;

  return (
    <Formik
      initialValues={currentUser ? currentUser : formikUserDefault}
      enableReinitialize={true}
      onSubmit={(values) => handleUpdateUser(values)}
    >
      {(props) => (
        <View
          style={{
            ...styles.container,
            height: screenHeight - bottomBarHeight - 200,
          }}
        >
          {isSwallVisible && (
            <SwalWarning>
              <Text style={{ textAlign: 'center' }}>
                Hey {currentUser?.pseudo ?? ''} are you sure you want to delete
                your account?
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'red',
                  textDecorationLine: 'underline',
                }}
              >
                All of your alerts will be deleted
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'center',
                  gap: 10,
                  paddingTop: 20,
                }}
              >
                <TouchableHighlight
                  style={mainStyle.outlineButton}
                  onPress={() => setIsSwallVisible(false)}
                >
                  <Text>Cancel</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={mainStyle.outlineButton}
                  onPress={() => handleDeleteUser()}
                >
                  <Text>Continue</Text>
                </TouchableHighlight>
              </View>
            </SwalWarning>
          )}
          <Text
            style={[
              mainStyle.info,
              mainStyle.marginBottom,
              mainStyle.textCenter,
            ]}
          >
            {currentUser?.pseudo
              ? `Welcome ${currentUser?.pseudo} !`
              : 'Settings'}
          </Text>
          <View style={styles.mainContainer}>
            <UserForm {...props} />
            <SettingButtons {...props} />
          </View>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
});
