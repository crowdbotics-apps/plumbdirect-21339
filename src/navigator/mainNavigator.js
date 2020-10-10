import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps136958Navigator from '../features/Maps136958/navigator';
import Add-Item136957Navigator from '../features/Add-Item136957/navigator';
import Maps136953Navigator from '../features/Maps136953/navigator';
import UserProfile136949Navigator from '../features/UserProfile136949/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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
