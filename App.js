import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import NumInput from './component/NumInput';
import ButtonValidate from './component/ButtonValidate';
import ColorSelector from './component/ColorSelector';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      score: Math.floor(Math.random() * Math.floor(1000 - 1)),
      input: "",
      sentence: ""
    };
    console.log(this.state.score);
  }

  callbackInput = (childData) => {
    this.setState({ input: childData });
  };

  callbackRep = (childData) => {
    this.setState({ sentence: childData });
  };

  render() {
    return (
      <View style={styles.container}>
        <NumInput parentCallback={this.callbackInput}></NumInput>
        <Text style={styles.text}> {this.state.sentence} </Text>
        <ButtonValidate parentCallback={this.callbackRep} parentData={this.state}></ButtonValidate>
        <View style={ styles.colorSelector }>
          <ColorSelector></ColorSelector>
        </View>
      </View>
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
  text: {
    marginBottom: 15
  },
  colorSelector: {
    marginTop: 200
  }
});
