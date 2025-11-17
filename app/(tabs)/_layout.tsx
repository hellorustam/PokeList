import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: '#ffd33d',
				tabBarStyle: { backgroundColor: '#25292e' },
				headerStyle: { backgroundColor: '#25292e' },
				headerTintColor: '#fff',
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
							name={
								focused ? 'information-circle' : 'information-circle-outline'
							}
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
							name={
								focused ? 'information-circle' : 'information-circle-outline'
							}
							color={color}
							size={24}
						/>
					),
				}}
			/>
		</Tabs>
	)
}
