import React, { Component } from "react";
import About from './About.js';
import { Button } from "react-native";
import View from "react-native-web/dist/exports/View";

export default class Nav extends Component {

    constructor(props) {
        super(props);
    };

    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        return (
            <View>
                <Button
                title="Home"
                onPress={() => navigate('Home', {name: 'Maison'})}
                />
                <Button
                title="About"
                onPress={() => navigate('About', {name: 'A propos'})}
                />
            </View>
        );
    }
}


const {navigate} = this.props.navigation;
