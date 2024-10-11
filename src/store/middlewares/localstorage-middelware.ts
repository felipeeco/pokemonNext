import { Middleware, PayloadAction } from '@reduxjs/toolkit';

export const localStorageMiddleware: Middleware = (storeAPI) => (next) => (action: any) => {
  next(action);
  if(action.type === 'pokemonsState/toggleFavorite') {
    const state = storeAPI.getState();
    return localStorage.setItem('favoritePokemons', JSON.stringify(state.pokemons));
  }
};