import IndexLocation from '@/components/index/location';
import TimeSummary from '@/components/index/summery';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <IndexLocation />
      <TimeSummary />
      <View style={styles.prayerTimes}>
        <View style={styles.prayerTimeRow}>
          <Text style={styles.prayer}>İmsak</Text>
          <Text style={styles.time}>02:51</Text>
        </View>
        <View style={styles.prayerTimeRow}>
          <Text style={styles.prayer}>Güneş</Text>
          <Text style={styles.time}>04:42</Text>
        </View>
        <View style={styles.prayerTimeRow}>
          <Text style={styles.prayer}>Öğle</Text>
          <Text style={styles.time}>12:19</Text>
        </View>
        <View style={styles.prayerTimeRow}>
          <Text style={styles.prayer}>İkindi</Text>
          <Text style={styles.time}>16:13</Text>
        </View>
        <View style={styles.prayerTimeRow}>
          <Text style={styles.prayer}>Akşam</Text>
          <Text style={styles.time}>19:46</Text>
        </View>
        <View style={styles.prayerTimeRow}>
          <Text style={styles.prayer}>Yatsı</Text>
          <Text style={styles.time}>21:28</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#FFEEDD',
    alignItems: 'center',
  },
  prayerTimes: {
    marginTop: 40,
    width: '100%',
    height: '65%',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingHorizontal: 0,
  },
  prayerTimeRow: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    opacity: 0.8,
    paddingVertical: 20,
  },
  prayer: {
    fontSize: 18,
    paddingLeft: 20,
    color: '#A23E00',
  },
  time: {
    fontSize: 18,
    paddingRight: 20,
    color: '#A23E00',
  },
});