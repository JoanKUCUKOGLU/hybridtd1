import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native'

export default class ColorSelector extends Component {

    constructor(props) {
        super(props);
        this.state = { color: 'white' };
    }

    render() {
        return (
            <View style={styles.buttonLine}>
                <Button
                    title="White"
                    onPress={() => { this.setState({ color: 'white' }); }}
                    style={styles.button}
                />
                <Button
                    title="Red"
                    onPress={() => { this.setState({ color: 'red' }); }}
                    style={styles.button}
                />
                <Button
                    title="Blue"
                    onPress={() => { this.setState({ color: 'blue' }); }}
                    style={styles.button}
                />
                <Button
                    title="Yellow"
                    onPress={() => { this.setState({ color: 'yellow' }); }}
                    style={styles.button}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonLine: {
        bottom: 30,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    button: {
        margin: 20
    }
});