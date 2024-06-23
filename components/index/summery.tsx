import { StyleSheet, Text, View } from "react-native";


export default function TimeSummary() {
    return (
        <View style={styles.main}>
            <Text style={styles.countdown}>Öğle Vaktine</Text>
            <Text style={styles.timeRemaining}>21dk</Text>
            <Text style={styles.date}>Hicri 17 Zilhicce 1445</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        alignItems: 'center',
        marginTop: 60,
    },
    countdown: {
        fontSize: 24,
        color: '#A23E00',
    },
    timeRemaining: {
        fontSize: 48,
        color: '#A23E00',
    },
    date: {
        fontSize: 16,
        color: '#A23E00',
        marginTop: 10,
    },
});