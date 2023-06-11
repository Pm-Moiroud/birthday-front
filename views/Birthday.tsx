import { Button } from 'native-base';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import useGeneralStore from '../store';
import BirthdayCard from '../components/birthday/BirthdayCard';
import { mainStyle } from '../styles/main';

import Ionicons from '@expo/vector-icons/Ionicons';

import Lottie from 'lottie-react-native';
import CreateBirthday from '../components/birthday/CreateBirthday';
import UpdateBirthday from '../components/birthday/UpdateBirthday';
import { formikBirthdayDefault } from '../types/Formik';

export default function HomeScreen() {
  const {
    getBirthdays,
    birthdays,
    birthdayListState,
    handleSetBirthday,
    toggleBirthdayModal,
    isBirthdayModalOpen,
  } = useGeneralStore();

  React.useEffect(() => {
    getBirthdays();
  }, []);

  return birthdayListState === 0 ? (
    <Text style={mainStyle.textWhite}>Loading</Text>
  ) : (
    <View
      style={{
        height: '100%',
        paddingTop: 20,
        paddingHorizontal: 20,
      }}
    >
      {isBirthdayModalOpen.open && isBirthdayModalOpen.type === 'create' ? (
        <CreateBirthday />
      ) : (
        <UpdateBirthday />
      )}
      <Button
        style={styles.addBirthdayButton}
        onPress={() => {
          handleSetBirthday(formikBirthdayDefault);
          toggleBirthdayModal('create');
        }}
      >
        <Ionicons name='md-add' size={25} color='red' />
      </Button>
      <Text style={[mainStyle.info, mainStyle.marginBottom]}>
        Birthday alerts
      </Text>
      {birthdays.length ? (
        <View
          style={{
            height: '100%',
            display: 'flex',
          }}
        >
          <FlatList
            data={birthdays}
            renderItem={({ item }) => <BirthdayCard birthday={item} />}
            keyExtractor={(item) => item.id}
          />
        </View>
      ) : (
        <View style={styles.lottieContainer}>
          <Lottie
            source={require('../assets/lottie/no-result.json')}
            style={{ width: 300, height: 300 }}
            autoPlay
            loop
          />
          <Text style={styles.noAlertText}>No alert found</Text>
          <Text style={styles.noAlertSubtext}>
            Create a new one by clicking on the bottom left button
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  noAlertText: {
    color: 'white',
    fontSize: 30,
    fontWeight: '300',
    marginBottom: 5,
  },
  noAlertSubtext: {
    textAlign: 'center',
    color: 'white',
    width: '80%',
    fontSize: 15,
    fontWeight: '300',
  },
  lottieContainer: {
    display: 'flex',
    justifyContent: 'center',
    flex: 2,
    alignItems: 'center',
    marginBottom: 50,
  },
  addBirthdayButton: {
    backgroundColor: 'white',
    width: 70,
    height: 70,
    borderRadius: 50,
    zIndex: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 50,
    right: 30,
  },
});
