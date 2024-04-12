import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  header: {
    marginTop: 20,
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    borderBottomColor: '#75a9f9',
    borderBottomWidth: 2,
  },

  containerMenuIcon:{
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    left: 20,
  },

  menuIcon:{
    width:30,
    height:30,
  },

  nameApp: {
    fontSize: 20,
    color: '#1464f6',
    fontWeight: 'bold',
  },
  
  menuContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    width: '100%',
    height: '100%',
  },

  menu: {
    backgroundColor: 'rgba(225, 225, 225, 0.9)',
    width: '40%',
    height: '100%',
    padding: 20,
    paddingTop: 30,
    gap: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },

  containerClose: {
    position: 'absolute',
    right: 20,
    top: 10,
  },

  close: {
    width: 15,
    height: 15,
  }
});