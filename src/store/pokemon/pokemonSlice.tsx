import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SimplePokemon } from '@interfaces/simple-pokemon';

interface PokemonsState {
  favorites: {[key: string]: SimplePokemon}
}

const initialState: PokemonsState = {
  favorites: {}
}

function getLocalStorage() {
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
     return JSON.parse(localStorage.getItem('favoritePokemons') || '{}');
  } else {
    return {};
  } 
}

const pokemonSlice = createSlice({
  name: 'pokemonsState',
  initialState,
  reducers: {
    setFavorites(state, action: PayloadAction<{[key: string]: SimplePokemon}>) {
      state.favorites = action.payload;
    },
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if(!!state.favorites[id]) {
        delete state.favorites[id];
      }else {
        state.favorites[id] = pokemon;
      }
    },
  }
  
});

export const { toggleFavorite, setFavorites } = pokemonSlice.actions;
export default pokemonSlice.reducer;