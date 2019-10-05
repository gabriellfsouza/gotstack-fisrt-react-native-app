import React, { Component } from 'react';
import CodePush from 'react-native-code-push';
import OneSignal from 'react-native-onesignal';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';

import Routes from './routes';

class App extends Component {
  constructor(props) {
    super(props);

    OneSignal.init('a3c7f8bd-8c6e-4ffa-8918-6bf882916c45');
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived = data => {};

  onOpened = notification => {};

  onIds = id => {};

  render() {
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
        <Routes />
      </>
    );
  }
}

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
})(App);
