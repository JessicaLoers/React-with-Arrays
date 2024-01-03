import React from "react";
import PokemonCard from "./components/PokemonCard";
import "./App.css";
import "./styles.css";

export default function App() {
  // Array of pokemons, each with an id, name, types, and image URL
  const pokemons = [
    {
      id: "448",
      name: "Lucario",
      types: "fighting, steel",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/448.svg",
    },
    {
      id: "249",
      name: "Lugia",
      types: "psychic, flying",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/249.svg",
    },
    {
      id: "197",
      name: "Umbreon",
      types: "dark",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/197.svg",
    },
    {
      id: "445",
      name: "Garchomp",
      types: "dragon",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/445.svg",
    },
  ];

  return (
    <main className="app">
      <h1 className="app__title">Pokédex</h1>
      <ul className="app__pokemons">
        {
          // Mapping each pokemon to an <li> element - explicit return
          pokemons.map((pokemon) => {
            return (
              // Each pokemon is represented by a list item
              <li key={pokemon.id}>
                {/* PokemonCard component is used to display each pokemon's */}
                details
                <PokemonCard
                  id={pokemon.id}
                  name={pokemon.name}
                  types={pokemon.types}
                  image={pokemon.image}
                />
              </li>
            );
          })
        }
      </ul>
    </main>
  );
}

/* Implied return ⬇️
<ul className="App__pokemons">
  {pokemons.map((pokemon) => (
    <li>{pokemon.name}</li>
  ))}
</ul>

*/
