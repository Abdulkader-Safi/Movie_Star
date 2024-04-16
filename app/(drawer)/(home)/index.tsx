import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import { Card } from 'tamagui';

import { Title } from '~/tamagui.config';

const Page = () => {
  return (
    <View style={{ paddingHorizontal: 10 }}>
      <Title>Home</Title>

      <Link href="/(drawer)/(home)/(movie)/1" asChild>
        <Text>Movie 1</Text>
      </Link>
      <Card>
        <Card.Header>
          <Text style={{ color: '#fff' }}>Header</Text>
        </Card.Header>

        <Card.Footer />

        <Card.Background />
      </Card>
    </View>
  );
};

export default Page;
