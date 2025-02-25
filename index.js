/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import { name as appName } from './app.json';
import Store from './App/redux/store';

const Main = () => {
    return (
        <Provider
            store={Store}
        >
            <App />
        </Provider>
    )
}
AppRegistry.registerComponent(appName, () => Main);
