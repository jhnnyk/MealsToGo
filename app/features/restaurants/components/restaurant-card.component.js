import styled from 'styled-components/native'
import { Card } from 'react-native-paper'

const StyledRestaurantCard = styled(Card)`
  background-color: white;
`

const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`

const Title = styled.Text`
  padding: 16px;
  color: ${(props) => props.theme.colors.ui.primary};
`

export const RestaurantCard = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon,
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant

  return (
    <StyledRestaurantCard elevation={5}>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </StyledRestaurantCard>
  )
}
