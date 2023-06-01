import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getLSitem(storageKey: string): Promise<string> {
  try {
    const token = await AsyncStorage.getItem(storageKey);
    if (token) {
      return token;
    } else {
      return '';
    }
  } catch (error) {
    console.error(error);
    return '';
  }
}

export async function setLSitem(
  storageKey: string,
  value: string
): Promise<void> {
  try {
    await AsyncStorage.setItem(storageKey, value);
  } catch (error) {
    console.error(error);
  }
}

export async function removeLSitem(storageKey: string): Promise<void> {
  try {
    await AsyncStorage.removeItem(storageKey);
  } catch (error) {
    console.error(error);
  }
}
