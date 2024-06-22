import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Switch } from 'react-native';

function TabThreeScreen() {
    const [isEnabled, setIsEnabled] = React.useState(false);
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
            headerImage={<Ionicons size={310} name="settings" style={styles.headerImage} />}>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Ayarlar</ThemedText>
                <HelloWave />
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type="default">Bu ekranı açtığınıza göre uygulamamızı kullanmaya başlamışsınız demektir. Eğer bir sorunla karşılaşırsanız lütfen bize ulaşın.</ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type="default">Karanlık mod: </ThemedText>
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={setIsEnabled}
                    value={isEnabled}
                />

                <ThemedText type='default'>Dil seçimi: </ThemedText>

                <ThemedText type='default'>Bildirimler: </ThemedText>
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={setIsEnabled}
                    value={isEnabled}
                />

                <ThemedText type='default'>Hesap ayarları: </ThemedText>

                <ThemedText type='default'>Gizlilik: </ThemedText>

                <ThemedText type='default'>Güvenlik: </ThemedText>

                <ThemedText type='default'>Yardım: </ThemedText>

                <ThemedText type='default'>Hakkında: </ThemedText>

                <ThemedText type='default'>Çıkış yap: </ThemedText>
            </ThemedView>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
    },
    stepContainer: {
        gap: 8,
    },
});


export default TabThreeScreen;