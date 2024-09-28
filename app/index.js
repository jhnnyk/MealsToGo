import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components/native'
import { theme } from './infrastructure/theme'
import {
  Oswald_400Regular,
  useFonts as useOswald,
} from '@expo-google-fonts/oswald'
import { Lato_400Regular, useFonts as useLato } from '@expo-google-fonts/lato'
import { RestaurantsScreen } from './features/restaurants/screens/restaurants.screen'

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  })

  const [latoLoaded] = useLato({
    Lato_400Regular,
  })

  if (!oswaldLoaded || !latoLoaded) {
    return null
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>

      <ExpoStatusBar style="auto" />
    </>
  )
}
