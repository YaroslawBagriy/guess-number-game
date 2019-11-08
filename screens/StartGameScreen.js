import React from 'react';
import { View, Text, StyleSheet, Button  } from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import Colors from '../Constants/colors';

const StartGameScreen = props => {
    return (
        <View style={ styles.screen }>
            <Text styles={ styles.title }>Start a New Game!</Text>
            <Card styles={ styles.inputContainer }>
                <Text >Select a Number</Text>
                <Input 
                    style={ styles.input } 
                    blurOnSubmit 
                    autoCapitalize='none' 
                    autoCorrect={false}
                    keyboardType='numeric'
                    maxLength={2}/>
                <View style={ styles.buttonContainer }>
                    <View style={ styles.button }>
                        <Button title="Reset" onPress={() => {}} color={ Colors.accent }/>
                    </View>
                    <View style={ styles.button }>
                        <Button title="Confirm" onPress={() => {}} color={ Colors.primary }/>
                    </View>
                </View>
            </Card>
        </View>
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