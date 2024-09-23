import Image from "next/image";

interface props {
  id: string;
  name: string;
}

export const PokemonCard = ({ id, name }: props) => (
  <div className="mx-auto mt-2 w-60">
    <div className="bg-white rounded overflow-hidden shadow-lg">
      <div className="flex flex-col items-center p-6 bg-gray-800 border-b">
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
    </div>
  </div>
);
