import { Ionicons } from '@expo/vector-icons';
import { colorTokens } from '@tamagui/themes';
import Drawer from 'expo-router/drawer';

const Layout = () => {
  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        drawerHideStatusBarOnOpen: true,
        drawerActiveBackgroundColor: colorTokens.dark.blue.blue7,
        drawerActiveTintColor: '#fff',
        drawerLabelStyle: { marginLeft: -20 },
      }}>
      <Drawer.Screen
        name="(home)"
        options={{
          title: 'Movie Star',
          headerShown: true,
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="home" size={size} color={color} />;
          },
        }}
      />

      <Drawer.Screen
        name="(favorite)"
        options={{
          title: 'My Favorites',
          headerShown: true,
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="star-outline" size={size} color={color} />;
          },
        }}
      />
    </Drawer>
  );
};

export default Layout;
