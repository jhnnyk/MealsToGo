import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components/native'
import { theme } from './infrastructure/theme'
import { RestaurantsScreen } from './features/restaurants/screens/restaurants.screen'

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>

      <ExpoStatusBar style="auto" />
    </>
  )
}
