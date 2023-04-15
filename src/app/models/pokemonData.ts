export type PokemonData = {
  name: string;
  id: number;
  sprites: {
    front_default: string
  };
  types: {
    slots: number,
    type: {
      name: string,
      url: string
    }
  }[]
}
