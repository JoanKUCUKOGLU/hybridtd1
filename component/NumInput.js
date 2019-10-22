import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native'

class NumInput extends Component {

    constructor(props) {
        super(props)
        this.state = { input: '' }
    }

    sendData = (text) => {
        this.props.parentCallback(text);
    };

    render() {
        return (
            <View>
                <TextInput
                    style={styles.textinput}
                    placeholder="mange tes morts salaud"
                    keyboardType='numeric'
                    onChangeText={(text) => this.sendData(text)}
                />
            </View>
        );
    }
}

export default NumInput;

const styles = StyleSheet.create({
    textinput: {
        width: 250,
        height: 40,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20
    },
});