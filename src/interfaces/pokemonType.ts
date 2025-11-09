interface Pokemon {
	name: string
	image: string
	imageBack: string
	types: PokemonType[]
}

interface PokemonType {
	type: {
		name: string
		url: string
	}
}

export default Pokemon
