export type PokemonLink = {
    name: string;
    url: string;
};
  
export type RawPokemon = {
    id: number;
    name: string;
    height: number;
    weight: number;
    sprites: {
        front_shiny: string;
    };
};

export type PokemonType = Pick<RawPokemon, 'height' | 'id' | 'name' | 'weight'> & {
    image: string;
};
  