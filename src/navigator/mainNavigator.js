import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Add-Item137096Navigator from '../features/Add-Item137096/navigator';
import Maps137092Navigator from '../features/Maps137092/navigator';
import UserProfile137088Navigator from '../features/UserProfile137088/navigator';
import Maps137007Navigator from '../features/Maps137007/navigator';
import Add-Item137006Navigator from '../features/Add-Item137006/navigator';
import Maps137002Navigator from '../features/Maps137002/navigator';
import UserProfile136998Navigator from '../features/UserProfile136998/navigator';
import Maps136958Navigator from '../features/Maps136958/navigator';
import Add-Item136957Navigator from '../features/Add-Item136957/navigator';
import Maps136953Navigator from '../features/Maps136953/navigator';
import UserProfile136949Navigator from '../features/UserProfile136949/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Add-Item137096: { screen: Add-Item137096Navigator },
Maps137092: { screen: Maps137092Navigator },
UserProfile137088: { screen: UserProfile137088Navigator },
Maps137007: { screen: Maps137007Navigator },
Add-Item137006: { screen: Add-Item137006Navigator },
Maps137002: { screen: Maps137002Navigator },
UserProfile136998: { screen: UserProfile136998Navigator },
Maps136958: { screen: Maps136958Navigator },
Add-Item136957: { screen: Add-Item136957Navigator },
Maps136953: { screen: Maps136953Navigator },
UserProfile136949: { screen: UserProfile136949Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
