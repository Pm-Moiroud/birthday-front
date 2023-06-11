import React from 'react';

import { CheckBox, Input } from '@rneui/base';
import { View, Text } from 'react-native';
import { mainStyle } from '../../styles/main';

type CheckboxToInput = {
  checkboxValue: boolean;
  checkboxLabel: string;
  onCheckboxPress: () => void;
  inputPlaceholder: string;
  inputValue: number;
  onInputChange: (value: string) => void;
};

export default function CheckboxToInputNumber({
  checkboxValue,
  checkboxLabel,
  onCheckboxPress,
  inputPlaceholder,
  inputValue,
  onInputChange,
}: CheckboxToInput) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent',
        height: 50,
      }}
    >
      <CheckBox
        checked={checkboxValue}
        onPress={onCheckboxPress}
        containerStyle={{
          backgroundColor: 'transparent',
          borderColor: 'transparent',
        }}
      />
      {checkboxValue ? (
        <Input
          placeholder={inputPlaceholder}
          label={checkboxLabel}
          value={inputValue.toString()}
          onChangeText={onInputChange}
          containerStyle={{
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            width: 225,
          }}
          inputMode='numeric'
          style={mainStyle.textWhite}
        />
      ) : (
        <Text
          style={[
            mainStyle.textWhite,
            {
              fontSize: 17,
            },
          ]}
        >
          {checkboxLabel}
        </Text>
      )}
    </View>
  );
}
