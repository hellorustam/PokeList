import indexStyles from '@/src/styles/indexStyle'
import { Link } from 'expo-router'
import { memo, useEffect, useState } from 'react'
import { FlatList, Image, Text, View } from 'react-native'

import colorByType from '@/src/constants/colorByType'
import fetchPokemons from '@/src/fetchPokemons'
import Pokemon from '../../src/interfaces/pokemonType'

const Index = memo(function Index() {
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
		<FlatList
			data={pokemons}
			numColumns={2}
			columnWrapperStyle={{ gap: 8 }}
			contentContainerStyle={{
				gap: 8,
				padding: 12,
			}}
			renderItem={({ item: pokemon }) => (
				<Link
					href={{
						pathname: '/pokemonDetails',
						params: {
							name: pokemon.name,
							image: pokemon.image,
							imageBack: pokemon.imageBack,
						},
					}}
					style={{
						backgroundColor: bgColor(pokemon) + '40',
						borderRadius: 32,
						flex: 1,
						flexDirection: 'column',
						padding: 16,
					}}
				>
					<View style={{ alignItems: 'center', justifyContent: 'center' }}>
						<View style={{ flexDirection: 'row' }}>
							<Image
								source={{ uri: pokemon.image }}
								style={indexStyles.imageSize}
							/>
						</View>
						<Text style={indexStyles.name}>{pokemon.name}</Text>
						<Text style={indexStyles.type}>{pokemon.types[0].type.name}</Text>
					</View>
				</Link>
			)}
			keyExtractor={pokemon => pokemon.name}
		/>
	)
})

export default Index
