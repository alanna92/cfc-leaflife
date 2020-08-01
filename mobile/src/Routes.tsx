import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import Home from './pages/Home';
import Profile from './pages/Profile';
import TreeMap from './pages/TreeMap';
import Picture from './pages/Picture';
import SpecieSuggestions from './pages/SpecieSuggestions';

const Tab = createBottomTabNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#388E3C',
    card: '#388E3C',
  },
};

const Routes: React.FC = () => {
  return (
    <NavigationContainer theme={theme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = '';

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Tree Map') {
              iconName = 'map';
            } else if (route.name === 'Add') {
              iconName = 'camera-alt';
            } else if (route.name === 'Suggestions') {
              iconName = 'info';
            }

            // You can return any component that you like here!
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: '#C8E6C9',
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Tree Map" component={TreeMap} />
        <Tab.Screen name="Add" component={Picture} />
        <Tab.Screen name="Suggestions" component={SpecieSuggestions} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
