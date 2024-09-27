import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { Searchbar } from 'react-native-paper'
import { RestaurantCard } from '../components/restaurant-card.component'

export const RestaurantsScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Searchbar placeholder="Search" />
    </View>
    <View style={styles.list}>
      <RestaurantCard />
    </View>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },

  search: {
    padding: 16,
  },

  list: {
    backgroundColor: 'blue',
    padding: 16,
    flex: 1,
  },
})
