import React from 'react';
import { View, Text, StyleSheet, TextInput, Button  } from 'react-native';


const StartGameScreen = props => {
    return (
        <View style={ styles.screen }>
            <Text styles={ styles.title }>Start a New Game!</Text>
            <View styles={ styles.inputContainer } >
                <Text >Select a Number</Text>
                <TextInput />
                <View style={ styles.buttonContainer }>
                    <Button title="Reset" onPress={() => {}} />
                    <Button title="Confirm" onPress={() => {}} />
                </View>
            </View>
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
        width: 100,
        maxWidth: "80%",
        alignItems: "center",
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5,
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    }
});

export default StartGameScreen;