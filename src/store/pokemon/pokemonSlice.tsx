import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SimplePokemon } from '@interfaces/simple-pokemon';

interface PokemonsState {
  [key: string]: SimplePokemon;
}

const initialState: PokemonsState = {
  '1': { id: 1, name: 'bulbasaur' },
};

const pokemonSlice = createSlice({
  name: 'pokemonsState',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if(!!state[id]) {
        delete state[id];
        return;
      }

      state[id] = pokemon;
    },
  }
  
});

export const { toggleFavorite } = pokemonSlice.actions;
export default pokemonSlice.reducer;