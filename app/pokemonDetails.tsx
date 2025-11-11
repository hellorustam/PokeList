import { useLocalSearchParams, useNavigation } from 'expo-router'
import { useEffect } from 'react'
import { ScrollView, Text } from 'react-native'

const PokemonDetails = () => {
	const params = useLocalSearchParams()

	const navigation = useNavigation()
	useEffect(() => {
		navigation.setOptions({
			title: (params?.name as string) || 'Pokemon Info',
		})
	}, [navigation, params?.name])

	return (
		<>
			<ScrollView
				contentContainerStyle={{
					gap: 8,
					padding: 12,
				}}
			>
				<Text>dfasdf</Text>
			</ScrollView>
		</>
	)
}

export default PokemonDetails
