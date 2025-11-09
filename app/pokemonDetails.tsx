import { Stack, useLocalSearchParams } from 'expo-router'
import { useEffect } from 'react'
import { ScrollView, Text } from 'react-native'

const PokemonDetails = () => {
	const params = useLocalSearchParams()
	console.log(params)

	useEffect(() => {}, [])

	// async function fetchPokemonByName(name: string) {
	// 	try {
	// 	} catch (error) {
	// 		console.log(error)
	// 	}
	// }

	return (
		<>
			<Stack.Screen options={{ title: params.name as string }}>
				<ScrollView
					contentContainerStyle={{
						gap: 8,
						padding: 12,
					}}
				>
					<Text>dfasdf</Text>
				</ScrollView>
			</Stack.Screen>
		</>
	)
}

// const styles = StyleSheet.create({})

export default PokemonDetails
