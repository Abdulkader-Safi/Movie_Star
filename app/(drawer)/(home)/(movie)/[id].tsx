import { Link, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const Page = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  console.log('🚀 ~ Page ~ id:', id);

  return (
    <View>
      <Text>Page</Text>
      <Link href="/(drawer)/(home)" asChild>
        <Text>Movie Card</Text>
      </Link>
    </View>
  );
};

export default Page;
