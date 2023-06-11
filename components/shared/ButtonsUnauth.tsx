import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

type ButtonsUnauthProps = {
  onCancel: () => void;
  onCancelText: string;
  onValidate: () => void;
  onValidateText: string;
};

export default function ButtonsUnauth({
  onCancel,
  onValidate,
  onCancelText,
  onValidateText,
}: ButtonsUnauthProps) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableHighlight
        onPress={onCancel}
        accessibilityLabel='register a new account'
        style={[styles.button, styles.buttonsSeparator]}
        underlayColor='#DF57BC'
        delayPressIn={50}
      >
        <Text style={styles.buttonText}>{onCancelText}</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={onValidate}
        accessibilityLabel='Already have an account ? Sign in'
        style={styles.button}
        underlayColor='#DF57BC'
      >
        <Text style={styles.buttonText}>{onValidateText}</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    width: '100%',
    height: 150,
  },
  button: {
    height: '100%',
    borderTopColor: 'white',
    borderTopWidth: 1,
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsSeparator: {
    borderRightWidth: 1,
    borderRightColor: 'white',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
