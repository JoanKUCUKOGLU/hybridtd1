import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native'

class ButtonValidate extends Component {

    sendData = (sentence) => {
        this.props.parentCallback(sentence);
    };

    render() {
        return (
            <View>
                <Button
                    title="Validate"
                    onPress={() => this.game()}
                    styles={ styles.button }
                />
            </View>
        );
    }

    game() {
        score = parseInt(this.props.parentData.score, 10);
        input = parseInt(this.props.parentData.input, 10);

        if(input > score) {
            sentence = input + ' est trop grand, manges tes morts.';
        } else if(input < score) {
            sentence = input + ' est trop petit, manges tes morts.';
        } else {
            sentence = 'Félicitations, tu as trouver ' + input + ', gros fils de pute.'; 
        }
        this.sendData(sentence);
    }
}

export default ButtonValidate;

const styles = StyleSheet.create({
    button: {
        width: 100
    },
});