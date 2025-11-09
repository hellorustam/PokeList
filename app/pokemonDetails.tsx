import { useLocalSearchParams, useNavigation } from 'expo-router'
import { useEffect } from 'react'
import { ScrollView, Text } from 'react-native'

const PokemonDetails = () => {
	const params = useLocalSearchParams()
	// console.log(params)

	const navigation = useNavigation()
	useEffect(() => {
		navigation.setOptions({
			title: (params?.name as string) || 'Pokemon Info',
		})
	}, [navigation, params?.name])

	return (
		<>
			{/* <Stack.Screen options={{ title: params.name as string }}> */}
			<ScrollView
				contentContainerStyle={{
					gap: 8,
					padding: 12,
				}}
			>
				<Text>dfasdf</Text>
			</ScrollView>
			{/* </Stack.Screen> */}
		</>
	)
}

export default PokemonDetails
