import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  header: {
    marginTop: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    borderBottomColor: '#c09edb',
    borderBottomWidth: 2,
    padding: 10,
    paddingTop: 20,
    zIndex: 999,
  },

  containerContentHeader:{
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },

  containerLogo: {
    display: 'flex',
    flexDirection: 'row',
  },
  
  menuContainer: {
    width: width,
    height: '100%',
    position: 'absolute',
  },

  background: {
    width: width,
    height: height,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },

  menu: {
    alignItems: 'center',
    backgroundColor: 'rgba(225, 225, 225, 1)',
    width: '50%',
    height: '96.7%',
    paddingTop: 30,
    gap: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderWidth: 2,
    borderColor: '#c09edb',
  },

  containerClose: {
    position: 'absolute',
    right: 20,
    top: 10,
  },

  containerInfoUser: {
    width: '100%',
    alignItems: 'center',
    borderBottomWidth: 2,
    paddingBottom: 10,
    borderColor: '#c09edb',
    gap: 10,
  },

  nameUser :{
    color: '#432659',
    fontSize: 16,
  },

  optionsMenu: {
    width: '100%',
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  menuItem :{
    color: '#432659',
    fontSize: 14,
  },
});
