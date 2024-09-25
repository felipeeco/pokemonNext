import Image from "next/image";
import Link from "next/link";

interface props {
  id: string;
  name: string;
}

export function PokemonCard ({ id, name }: props) {
  return (
  <div className="mx-auto mt-2 w-60">
    <div className="bg-white rounded overflow-hidden shadow-lg">
      <Link href={`/dashboard/pokemon/${id}`}>
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
    </div>
  </div>
)};
