import React from 'react';

import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import { FormikProps } from 'formik';
import { FormikUser } from '../../types/Formik';
import { mainStyle } from '../../styles/main';
import useGeneralStore from '../../store';

export default function SettingButtons({ ...props }: FormikProps<FormikUser>) {
  const { setIsSwallVisible, handleLogout } = useGeneralStore();
  return (
    <View>
      <TouchableOpacity
        onPress={() => props.handleSubmit()}
        style={styles.submitButton}
      >
        <Text
          style={[mainStyle.textCenter, mainStyle.textWhite, { fontSize: 18 }]}
        >
          Save
        </Text>
      </TouchableOpacity>
      <View style={styles.otherButtonsContainer}>
        <TouchableHighlight
          style={mainStyle.outlineButton}
          underlayColor={'red'}
        >
          <Text
            style={[
              mainStyle.textCenter,
              mainStyle.textWhite,
              { fontSize: 15 },
            ]}
            onPress={() => setIsSwallVisible(true)}
          >
            Delete account
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={mainStyle.outlineButton}
          underlayColor={'red'}
          onPress={handleLogout}
        >
          <Text
            style={[
              mainStyle.textCenter,
              mainStyle.textWhite,
              { fontSize: 15 },
            ]}
          >
            Deconnection
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  submitButton: {
    backgroundColor: 'red',
    paddingVertical: 16,
    borderRadius: 50,
  },
  otherButtonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
    marginTop: 30,
  },
});
