import { Input } from '@rneui/themed';
import dayjs from 'dayjs';
import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { mainStyle } from '../../styles/main';

type Props = {
  date: string;
  onConfirm?: (date: Date) => void;
  onCancel?: () => void;
  mode: 'date' | 'time' | 'datetime';
  label?: string;
  error?: string;
};

export default function DatePicker({
  date,
  onConfirm,
  onCancel,
  mode = 'datetime',
  label,
  error = '',
}: Props) {
  const [isDatePickerVisible, setDatePickerVisibility] =
    React.useState<boolean>(false);

  const toggleDatePicker = useCallback(() => {
    setDatePickerVisibility((prevState) => !prevState);
  }, []);

  return (
    <View>
      <View
        style={{
          position: 'relative',
          zIndex: 10001,
          width: '100%',
        }}
      >
        <Input
          value={dayjs(date).format('DD/MM/YYYY HH:mm')}
          inputStyle={mainStyle.textWhite}
          label={label}
          errorMessage={error}
        />
        <AntDesign
          name='calendar'
          size={26}
          color='white'
          style={{ position: 'absolute', right: 15, top: 15 }}
          onPress={toggleDatePicker}
        />
      </View>
      <DateTimePickerModal
        date={dayjs(date).toDate()}
        mode={mode}
        isVisible={isDatePickerVisible}
        onConfirm={(date) => {
          onConfirm && onConfirm(date);
          toggleDatePicker();
        }}
        onCancel={() => {
          onCancel && onCancel();
          toggleDatePicker();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
