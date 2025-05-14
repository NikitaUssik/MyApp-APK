import styled from 'styled-components/native';
import { Text, useWindowDimensions } from 'react-native';

const Container = styled.Pressable`
  flex-direction: row;
  margin: 8px;
  padding: 16px;
  background: white;
  border-radius: 8px;
  shadow-opacity: 0.1;
  shadow-radius: 3px;
`;

const ResponsiveImage = styled.Image`
  width: ${({ isTablet }) => isTablet ? 150 : 100}px;
  height: ${({ isTablet }) => isTablet ? 150 : 100}px;
  border-radius: 8px;
`;

export default function PlaceItem({ place }) {
  const { width } = useWindowDimensions();
  const isTablet = width >= 768;

  return (
    <Container>
      <ResponsiveImage source={place.imageUrl} isTablet={isTablet} />
      <Text style={{ flex: 1, marginLeft: 16 }}>{place.name}</Text>
    </Container>
  );
}
