import styled from 'styled-components/native'
import { SafeAreaView, StatusBar } from 'react-native'
import { Searchbar } from 'react-native-paper'
import { RestaurantCard } from '../components/restaurant-card.component'

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`

const RestaurantListContainer = styled.View`
  background-color: ${(props) => props.theme.colors.brand.primary};
  padding: ${(props) => props.theme.space[3]};
  flex: 1;
`

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar placeholder="Search" />
    </SearchContainer>
    <RestaurantListContainer>
      <RestaurantCard />
    </RestaurantListContainer>
  </SafeArea>
)
