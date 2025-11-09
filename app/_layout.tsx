import { Stack } from 'expo-router'

export default function RootLayout() {
	return (
		<Stack>
			<Stack.Screen name='index' options={{ title: 'Home' }} />
			<Stack.Screen
				name='pokemonDetails'
				options={{
					// title: 'Pokemon Info',
					headerBackButtonDisplayMode: 'minimal',
					presentation: 'formSheet',
					sheetAllowedDetents: [0.3, 0.6, 1],
					sheetGrabberVisible: true,
					// headerShown: false,
					sheetCornerRadius: 16,
				}}
			/>
		</Stack>
	)
}
