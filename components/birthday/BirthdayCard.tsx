import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Birthday } from '../../types/Birthday';

import { mainStyle } from '../../styles/main';
import { renderDate } from '../../utils/functions/globals';
import useGeneralStore from '../../store';

import { FontAwesome, Ionicons, Feather } from '@expo/vector-icons';

export type BirthdayCardProps = {
  birthday: Birthday;
};

export default function BirthdayCard({ birthday }: BirthdayCardProps) {
  const {
    handleDeleteBirthday,
    handleUpdateBirthdayReminder,
    handleSetBirthday,
    toggleBirthdayModal,
  } = useGeneralStore();

  return (
    <View style={styles.cardContainer}>
      <View>
        <Text style={[mainStyle.textWhite, mainStyle.fontSubtitle]}>
          {birthday.name}
        </Text>
        <Text style={mainStyle.textWhite}>
          {renderDate(birthday.started_at, birthday.ended_at)}
        </Text>
      </View>
      <View style={styles.containerButton}>
        {birthday.Status?.slug === 'processing' ? (
          <FontAwesome
            name='bell'
            size={25}
            color='white'
            onPress={() => handleUpdateBirthdayReminder(birthday.id, birthday)}
          />
        ) : (
          <FontAwesome name='bell-slash' size={24} color='#BB0A21' />
        )}
        <Feather
          name='edit'
          size={24}
          color='white'
          onPress={() => {
            handleSetBirthday(birthday);
            toggleBirthdayModal('update');
          }}
        />
        <Ionicons
          name='md-trash'
          size={25}
          color='white'
          onPress={() => handleDeleteBirthday(birthday.id)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#202A25',
    marginBottom: 30,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
});
