import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function IndexLocation() {
    return (
        <View style={styles.header}>
            <Link style={styles.link} href="/settings">
                <Text style={styles.city}>
                    Bitlis
                </Text>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    link: {
        width: '100%',
        alignItems: 'center',
        textAlign: 'center',
    },
    header: {
        backgroundColor: '#fff',
        width: '35%',
        padding: 8,
        opacity: 0.8,
        textTransform: 'uppercase',
        borderRadius: 50,
    },
    city: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#B23E00',
    },
});