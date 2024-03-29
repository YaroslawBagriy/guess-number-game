import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import Colors from '../Constants/colors';

const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setSelectedNumber();
        setEnteredValue('');
        setConfirmed(false);
    }

    const confirmInputHandler = () => {
        const choosenNumber = parseInt(enteredValue);
        if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
            Alert.alert(
                'Invalid number!', 
                'Number has to be a number between 1 ans 99',
                [{text: 'Okay', style: 'destructive', onPress: resetInputHandler }])
            return;
        }

        setSelectedNumber(choosenNumber);
        setEnteredValue('');
        setConfirmed(true);
    }

    let confirmedOutput;
     
    if (confirmed) {
        confirmedOutput = <Text>Choosen Number: { selectedNumber }</Text>
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={ styles.screen }>
                <Text styles={ styles.title }>Start a New Game!</Text>
                <Card styles={ styles.inputContainer }>
                    <Text >Select a Number</Text>
                    <Input 
                        style={ styles.input } 
                        blurOnSubmit 
                        autoCapitalize='none' 
                        autoCorrect={false}
                        keyboardType='number-pad'
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue} />
                    <View style={ styles.buttonContainer }>
                        <View style={ styles.button }>
                            <Button title="Reset" onPress={resetInputHandler} color={ Colors.accent }/>
                        </View>
                        <View style={ styles.button }>
                            <Button title="Confirm" onPress={confirmInputHandler} color={ Colors.primary }/>
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems:  "center"
    },
    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-evenly",
        paddingHorizontal: 15
    },
    inputContainer: {
        width: 300,
        maxWidth: "80%",
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    button: {
        width: 100
    },
    input: {
        width: 100,
        textAlign: "center"
    }
});

export default StartGameScreen;