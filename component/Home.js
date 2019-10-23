import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import NumInput from './NumInput';
import ColorSelector from './ColorSelector';
import Nav from './Nav'
import ButtonValidate from "./ButtonValidate"

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


export default class Home extends React.Component {


    constructor() {
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
                <Nav/>
                <NumInput parentCallback={this.callbackInput}/>
                <Text style={styles.text}> {this.state.sentence} </Text>
                <ButtonValidate parentCallback = {this.callbackRep} parentData={this.state}/>
                <View style={ styles.colorSelector }>
                    <ColorSelector/>
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

