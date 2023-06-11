import React from 'react';

import { FormikProps } from 'formik';
import { FormikUser } from '../../types/Formik';
import { CheckBox, Input } from '@rneui/base';
import { View } from 'react-native';
import { mainStyle } from '../../styles/main';

export default function UserForm({ ...props }: FormikProps<FormikUser>) {
  return (
    <View>
      <Input
        label='EMAIL'
        value={props.values.email}
        inputStyle={mainStyle.textWhite}
        onChangeText={props.handleChange('email')}
      />
      <Input
        label='PSEUDO'
        value={props.values.pseudo}
        onChangeText={props.handleChange('pseudo')}
        inputStyle={mainStyle.textWhite}
      />
      <CheckBox
        title='NOTIFICATION PUSH'
        checked={props.values.canReceivePushNotif}
        checkedColor='red'
        containerStyle={{
          backgroundColor: 'transparent',
        }}
        onPress={() =>
          props.setFieldValue(
            'canReceivePushNotif',
            !props.values.canReceivePushNotif
          )
        }
        textStyle={{
          color: 'white',
        }}
      />
      <CheckBox
        title='NOTIFICATION EMAIL'
        checked={props.values.canReceiveEmailNotif}
        onPress={() =>
          props.setFieldValue(
            'canReceiveEmailNotif',
            !props.values.canReceiveEmailNotif
          )
        }
        checkedColor='red'
        containerStyle={{
          backgroundColor: 'transparent',
        }}
        textStyle={{
          color: 'white',
        }}
      />
    </View>
  );
}
