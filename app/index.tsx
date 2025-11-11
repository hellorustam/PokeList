import { Link } from 'expo-router'
import { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

import colorByType from '@/src/constants/colorByType'
import fetchPokemons from '@/src/fetchPokemons'
import Pokemon from '../src/interfaces/pokemonType'

export default function Index() {
	const [pokemons, setPokemons] = useState<Pokemon[]>([])

	useEffect(() => {
		fetchPokemons(setPokemons)
	}, [])

	function bgColor(pokemon: { types: { type: { name: string } }[] }) {
		return (
			colorByType[pokemon.types[0].type.name as keyof typeof colorByType] ||
			'#EEEEEE'
		)
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
						backgroundColor: bgColor(pokemon) + '40',
						borderRadius: 32,
						padding: 24,
					}}
				>
					<View>
						<View
							style={{
								flexDirection: 'row',
							}}
						>
							<Image source={{ uri: pokemon.image }} style={styles.imageSize} />
							<Image
								source={{ uri: pokemon.imageBack }}
								style={styles.imageSize}
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
	imageSize: {
		minWidth: 150,
		minHeight: 150,
	},
})
