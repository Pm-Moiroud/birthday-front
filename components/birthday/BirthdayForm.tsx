import { FormikProps } from 'formik';
import React from 'react';
import { FormikBirthday } from '../../types/Formik';
import { Text, TouchableHighlight, View } from 'react-native';
import { Input } from '@rneui/themed';
import DatePicker from '../shared/DatePicker';
import dayjs from 'dayjs';
import CheckboxToInputNumber from '../shared/CheckboxToInputNumber';
import { mainStyle } from '../../styles/main';
import CardLayout from '../layouts/CardLayout';

import Ionicons from '@expo/vector-icons/Ionicons';
import useGeneralStore from '../../store';

type BirthdayFormProps = {
  formik: FormikProps<FormikBirthday>;
};

export default function BirthdayForm({ formik }: BirthdayFormProps) {
  const { cleanBirthday } = useGeneralStore();
  return (
    <CardLayout>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
          paddingHorizontal: 20,
          paddingVertical: 20,
          position: 'relative',
        }}
      >
        <Ionicons
          name='md-close'
          size={32}
          color='white'
          style={{ position: 'absolute', right: 5, top: 5 }}
          onPress={() => cleanBirthday()}
        />

        <View style={{ gap: 20, marginTop: 20 }}>
          <Input
            placeholder='Anniversaire steven'
            label='Label'
            inputStyle={mainStyle.textWhite}
            value={formik.values.name}
            onChangeText={formik.handleChange('name')}
            errorMessage={formik.errors.name}
          />

          <DatePicker
            date={formik.values.started_at}
            error={formik.errors.started_at}
            label='Started at'
            mode='datetime'
            onConfirm={(date) =>
              formik.setFieldValue('started_at', dayjs(date).format())
            }
          />
          <DatePicker
            date={formik.values.ended_at}
            error={formik.errors.ended_at}
            label='Ended at'
            mode='datetime'
            onConfirm={(date) =>
              formik.setFieldValue('ended_at', dayjs(date).format())
            }
          />
          <CheckboxToInputNumber
            checkboxValue={formik.values.reminder_push > 0}
            checkboxLabel='Reminder push'
            inputPlaceholder='Reminder push'
            inputValue={formik.values.reminder_push}
            onInputChange={(value) =>
              formik.setFieldValue('reminder_push', parseInt(value))
            }
            onCheckboxPress={() =>
              formik.setFieldValue(
                'reminder_push',
                formik.values.reminder_push > 0 ? 0 : 1
              )
            }
          />
          <CheckboxToInputNumber
            checkboxValue={formik.values.reminder_email > 0}
            checkboxLabel='Reminder email'
            inputPlaceholder='Reminder email'
            inputValue={formik.values.reminder_email}
            onInputChange={(value) =>
              formik.setFieldValue('reminder_email', parseInt(value))
            }
            onCheckboxPress={() =>
              formik.setFieldValue(
                'reminder_email',
                formik.values.reminder_email > 0 ? 0 : 1
              )
            }
          />
        </View>
        <TouchableHighlight
          accessibilityLabel='Create a new birthday alert'
          style={[mainStyle.Submitbutton]}
          underlayColor='transparent'
          delayPressIn={50}
          // @ts-ignore-next-line
          onPress={(e, values) => {
            formik.validateForm().then((errors) => {
              if (Object.keys(errors).length === 0) {
                formik.handleSubmit(values);
              }
            });
          }}
        >
          <Text>Submit</Text>
        </TouchableHighlight>
      </View>
    </CardLayout>
  );
}
