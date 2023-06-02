import { StyleSheet } from 'react-native';

export const mainStyle = StyleSheet.create({
  pageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#202A25',
    position: 'relative',
  },
  info: {
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
    color: 'white',
  },
  formContainer: {
    width: '100%',
    paddingHorizontal: 20,
    gap: 30,
    display: 'flex',
    flexDirection: 'column',
    height: 400,
    paddingTop: 40,
  },
  backIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  Submitbutton: {
    paddingHorizontal: 40,
    paddingVertical: 15,
    backgroundColor: '#46494C',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.27,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  SubmitbuttonText: {
    color: 'white',
    fontSize: 20,
  },
});
