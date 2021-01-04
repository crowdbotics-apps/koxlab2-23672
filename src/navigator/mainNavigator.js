import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile190360Navigator from '../features/UserProfile190360/navigator';
import Tutorial190359Navigator from '../features/Tutorial190359/navigator';
import NotificationList190331Navigator from '../features/NotificationList190331/navigator';
import Settings190330Navigator from '../features/Settings190330/navigator';
import Settings190322Navigator from '../features/Settings190322/navigator';
import UserProfile190320Navigator from '../features/UserProfile190320/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile190360: { screen: UserProfile190360Navigator },
Tutorial190359: { screen: Tutorial190359Navigator },
NotificationList190331: { screen: NotificationList190331Navigator },
Settings190330: { screen: Settings190330Navigator },
Settings190322: { screen: Settings190322Navigator },
UserProfile190320: { screen: UserProfile190320Navigator },

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
