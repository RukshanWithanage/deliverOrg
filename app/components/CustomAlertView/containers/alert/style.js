import { StyleSheet, Dimensions } from 'react-native';
import config from '../../config';
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  overlay: {
    width: width,
    height: height,
    position: 'absolute',
    backgroundColor: 'rgba(52,52,52,0.5)',
  },
  contentContainer: {
    width: '90%',
    backgroundColor: '#fff',
    paddingHorizontal: '3%',
    borderRadius: 5
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertHeader: {
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderBottomColor: '#F5F5F5',
    borderBottomWidth: 1,
    flexDirection: 'row',
    paddingVertical: 5,
  },
  titleleftContainer: {
    width: '90%',
    justifyContent: 'flex-start',
  },
  titlerightContainer: {
    width: '10%',
    justifyContent: 'flex-start',
    alignItems: 'flex-end'
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  title: {
    color: config.colors.title,
    fontSize: config.size.title,
    fontWeight: '500',
    textAlign: 'left'
  },
  message: {
    paddingTop: config.spacing.msgPadding,
    color: config.colors.msg,
    fontSize: config.size.msg,
    textAlign: 'center'
  },
  button: {
    flexDirection: 'row',
    paddingVertical: config.spacing.actionButtonPaddingVertical,
    margin: 2,
    paddingHorizontal: 3,
    borderWidth: 1,
    borderColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 12
  },
  closeImage: {
    width: '100%',
    height: '100%'
  },
  titleTouch: { 
    backgroundColor: '#fff', 
    width: 25, 
    height: 25, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 8 
  },
  actionAll :{ 
    paddingTop: 30, 
    paddingBottom: 30, 
    backgroundColor: '#fff' 
  }
});

export default styles;
