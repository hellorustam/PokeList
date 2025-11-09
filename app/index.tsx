import { Link } from 'expo-router'
import { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

import colorByType from '@/src/constants/colorByType'
import Pokemon from '../src/interfaces/pokemonType'

export default function Index() {
	const [pokemons, setPokemons] = useState<Pokemon[]>([])

	useEffect(() => {
		fetchPokemons()
	}, [])

	async function fetchPokemons() {
		try {
			const response = await fetch(
				'https://pokeapi.co/api/v2/pokemon/?limit=15'
			)

			const data = await response.json()

			const detailedPokemons = await Promise.all(
				data.results.map(async (pokemon: any) => {
					const res = await fetch(pokemon.url)
					const details = await res.json()
					return {
						name: pokemon.name,
						image: details.sprites.front_default,
						imageBack: details.sprites.back_default,
						types: details.types,
					}
				})
			)

			setPokemons(detailedPokemons)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<ScrollView
			contentContainerStyle={{
				gap: 8,
				padding: 12,
			}}
		>
			{pokemons.map(pokemon => (
				<Link
					key={pokemon.name}
					href={{ pathname: '/pokemonDetails', params: { name: pokemon.name } }}
					style={{
						// @ts-ignore
						backgroundColor: colorByType[pokemon.types[0].type.name] + 40,
						borderRadius: 32,
						padding: 24,
						// boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
					}}
				>
					<View>
						<View
							style={{
								flexDirection: 'row',
							}}
						>
							<Image
								source={{ uri: pokemon.image }}
								style={{
									width: 150,
									height: 150,
								}}
							/>
							<Image
								source={{ uri: pokemon.imageBack }}
								style={{
									width: 150,
									height: 150,
								}}
							/>
						</View>
						<Text style={styles.name}>{pokemon.name}</Text>
						<Text style={styles.type}>{pokemon.types[0].type.name}</Text>
					</View>
				</Link>
			))}
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	name: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#272727ff',
		textAlign: 'center',
	},
	type: {
		fontSize: 18,
		fontWeight: 'thin',
		color: '#7e7e7eff',
		textAlign: 'center',
	},
})
