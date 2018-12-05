import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {Header} from './component/header';
export default class App extends React.Component {
  render() {
    return (
      

      <Button title="Button" onPress={() => {}} />
      // <Text>Open up App.js to start working on your app!</Text>
 
      // <Header textIwant={'hello'} ></Header>
      // <Header textIwant={'goodbye'}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
