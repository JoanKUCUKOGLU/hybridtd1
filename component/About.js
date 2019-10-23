import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native'

class About extends Component {

    render() {
        return (
            <View>
                <Text style={styles.text}>
                    <p>Sushi</p>
                    <p>Tom</p>
                    <p>Kevin</p>
                </Text>
            </View>
        );
    }
}

export default About;

const styles = StyleSheet.create({
    text: {
        color: 'blue'
    },
});
