import { registerRootComponent } from 'expo';

//import App from './App'; 
//import Array from './Array';
//import Todolist from './Todolist';
import App2 from './App2';


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App2);
