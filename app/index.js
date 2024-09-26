import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Text>search</Text>
        </View>
        <View style={styles.list}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  search: {
    backgroundColor: 'green',
    padding: 16,
  },

  list: {
    backgroundColor: 'blue',
    padding: 16,
    flex: 1,
  },
})
