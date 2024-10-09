'use client';

import Image from "next/image";
import Link from "next/link";
import { useAppSelector, useAppDispatch } from "@/store";
import { toggleFavorite } from "@/store/pokemon/pokemonSlice";
import { SimplePokemon } from "@interfaces/simple-pokemon";
import { IoHeart, IoHeartOutline } from "react-icons/io5";

interface Props {
  pokemon: SimplePokemon;
}

export function PokemonCard ({ pokemon }: Props) {

  const {id, name} = pokemon;
  const isFavorite = !!useAppSelector((state) => state.pokemons[id]);
  const dispatch = useAppDispatch();
  const onToggle = () => dispatch(toggleFavorite(pokemon));

  return (
    <div className="mx-auto mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <Link href={`/dashboard/pokemon/${name}`}>
          <div className="flex flex-col items-center p-6 bg-gray-800 border-b cursor-pointer">
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
              alt={name}
              width={96}
              height={96}
              className="mx-auto"
              priority={false}
            />
            <p className="pt-2 text-lg font-semibold text-gray-50">{name}</p>
          </div>
        </Link>
        <div className="pt-2 flex justify-center items-center">
          {
            isFavorite ? 
            <IoHeart className="w-5 h-5 cursor-pointer text-red-500" onClick={onToggle} /> : 
            <IoHeartOutline className="w-5 h-5 cursor-pointer text-red-500" onClick={onToggle} />
          } 
        </div>
      </div>
    </div>
  );
}
