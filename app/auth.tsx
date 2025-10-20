import { View, KeyboardAvoidingView, Platform, } from 'react-native';
import React from 'react';
import { TextInput, Text, Button } from "react-native-paper"

const Auth = () => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <View>
                <Text>Create Account</Text>
                <TextInput
                    label="Email"
                    autoCapitalize='none'
                    keyboardType='email-address'
                    placeholder='example@gmail.com'
                    mode='outlined'
                />
                <TextInput
                    label="Password"
                    autoCapitalize='none'
                    keyboardType='email-address'
                    mode='outlined'
                />
                <Button mode='contained' >Sign Up</Button>
            </View>
        </KeyboardAvoidingView>
    );
};

export default Auth;
