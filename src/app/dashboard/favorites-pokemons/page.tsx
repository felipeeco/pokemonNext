'use client';
import { useEffect, useState } from "react";
import { useAppSelector } from "@/store";
import { PokemonResponse } from '@interfaces/index';
import { SimplePokemon } from '@interfaces/index';
import { PokemonCard } from '@components/PokemonCard';

export default function FavoritesPokemonsPage() {

  const [pokemons, setPokemons] = useState<SimplePokemon[]>([]);
  const favoritePokemons = useAppSelector(state => state.pokemons);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0')
      .then(response => response.json())
      .then((response: PokemonResponse) => {
        const mappedPokemons = response.results.map(pokemon => ({
          id: Number(pokemon.url.split('/').at(-2)),
          name: pokemon.name,
        }));
        setPokemons(mappedPokemons);
      });
  }, []);

  return (
    <div className="flex flex-wrap">
      {
        Array.isArray(pokemons) && pokemons.map(pokemon => {
          const isFavorite = favoritePokemons[pokemon.id];
          if (isFavorite) return <PokemonCard key={pokemon.id} pokemon={pokemon} />
        })
      }
      {
        Object.keys(favoritePokemons).length === 0 && 
        <p className="mx-auto mt-4 text-center text-3xl">You have no favorite pokemons</p>
      }
    </div>
  );
}