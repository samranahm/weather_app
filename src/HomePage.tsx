import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import Onyx from '../onyxConfig';
import ONYXKEYS from './ONYXKEYS';

type AccountData = {
    username: string;
    email: string;
    age: number;
};

const HomePage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState<number | null>(null); // Updated to hold a number or null
    const [savedUsername, setSavedUsername] = useState('');
    
    useEffect(() => {
        // Clear the Onyx key on app reload to reset data
        Onyx.set(ONYXKEYS.ACCOUNT, null);

        // Fetch data from Onyx on mount (to display previously stored values)
        Onyx.connect({
            key: ONYXKEYS.ACCOUNT,
            callback: (data: AccountData | null) => {
                if (data?.username) {
                    setSavedUsername(data.username); // Display the stored username if it exists
                }
            },
        });

        return () => {
            Onyx.disconnect(ONYXKEYS.ACCOUNT);
        };
    }, []);

    const handleSave = () => {
        if (!username || !email || age === null) {
            Alert.alert('Error', 'Please fill in all fields.');
            return;
        }

        const accountData: AccountData = { username, email, age };
        Onyx.set(ONYXKEYS.ACCOUNT, accountData); // Save to Onyx
        setSavedUsername(username); // Update display
        Alert.alert('Success', 'Your information has been saved!');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Weather App</Text>
            {savedUsername ? (
                <Text style={styles.greeting}>Hello, {savedUsername}!</Text>
            ) : (
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your name"
                        value={username}
                        onChangeText={setUsername}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your email"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your age"
                        keyboardType="numeric" // Ensures only numeric input
                        value={age?.toString() || ''} // Convert age to string for TextInput
                        onChangeText={(text) => setAge(parseInt(text) || null)} // Convert input back to number
                    />
                    <Button title="Save" onPress={handleSave} />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
    },
    greeting: {
        fontSize: 20,
        color: '#555',
        marginVertical: 15,
    },
    input: {
        width: 250,
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
});

export default HomePage;
