import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: '#ff7445ff',
				tabBarInactiveTintColor: '#8f94a1ff',
			}}
		>
			<Tabs.Screen
				name='index'
				options={{
					title: 'Home',
					tabBarIcon: ({ color, focused }) => (
						<Ionicons
							name={focused ? 'home-sharp' : 'home-outline'}
							color={color}
							size={24}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='favorite'
				options={{
					title: 'Favorite',
					tabBarIcon: ({ color, focused }) => (
						<Ionicons
							name={focused ? 'star' : 'star-outline'}
							color={color}
							size={24}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='profile'
				options={{
					title: 'Profile',
					tabBarIcon: ({ color, focused }) => (
						<Ionicons
							name={focused ? 'person' : 'person-outline'}
							color={color}
							size={24}
						/>
					),
				}}
			/>
		</Tabs>
	)
}
