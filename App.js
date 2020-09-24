import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import { View } from 'react-native';
console.disableYellowBox = true;

const navigator = createStackNavigator({
  Search: SearchScreen,
  DetailScreen: ResultsShowScreen
},
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Restaurant Finder',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'red'
      },
    },
  });

export default createAppContainer(navigator);

