import { StyleSheet } from 'react-native';

export const mainStyle = StyleSheet.create({
  pageContainer: {
    display: 'flex',
    height: '100%',
    justifyContent: 'space-between',
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
    marginBottom: 30,
  },
  SubmitbuttonText: {
    color: 'white',
    fontSize: 20,
  },
  textWhite: {
    color: 'white',
  },
  fontSubtitle: {
    fontSize: 20,
    marginBottom: 2,
  },
  marginBottom: {
    marginBottom: 40,
  },
  textCenter: {
    textAlign: 'center',
  },
  outlineButton: {
    borderWidth: 1,
    borderColor: 'red',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
