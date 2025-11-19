export default async function fetchPokemons(
	setPokemons: (pokemons: any[]) => void
) {
	try {
		const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=16')

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
		console.log(333)
	}
}
