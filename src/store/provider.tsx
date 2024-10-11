'use client';

import { Provider } from 'react-redux';
import { store } from './index';
import { useEffect } from 'react';
import { setFavorites } from './pokemon/pokemonSlice';

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favoritePokemons') || '{}');
    store.dispatch(setFavorites(favorites));
  }, []);

  return (
    <Provider store={store}>
      { children } 
    </Provider>
  )
};