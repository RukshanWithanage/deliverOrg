import { Dimensions } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
let deviceHeight = Dimensions.get('window').height;
import Login from 'app/features/login/containers/LoginContainer';


const HomeRouter = createStackNavigator(
	{
		CustomerQueue: {
			screen: CustomerQueue,
		}
	},
	{
		initialRouteName: 'CustomerQueue',
	},
);

const AuthStack = createStackNavigator({
	Login: {
		screen: Login,
		navigationOptions: { header: null },
	},
});

const LeftDrawerNavigator = createDrawerNavigator(
	{
		Home: {
			screen: HomeRouter,
		}
	},
	{
		initialRouteName: 'Home',
		contentComponent: DrawerScreen,
		drawerWidth: deviceHeight * 0.35,
		drawerLockMode: 'locked-closed',
	},
);

const RNApp = createSwitchNavigator(
	{
		AuthLoading: AuthLoadingScreen,
		App: {
			screen: LeftDrawerNavigator,
			navigationOptions: { header: null },
		},
		Auth: {
			screen: AuthStack,
			navigationOptions: { header: null },
		},
	},
	{
		initialRouteName: 'AuthLoading',
	},
);
export default createAppContainer(RNApp);
