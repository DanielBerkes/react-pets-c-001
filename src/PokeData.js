import React, { useState, useEffect } from "react";
import axios from "axios";

export default function PokeData() {
  const [number, setNumber] = useState(1);
  const [pokemon, setPokemon] = useState("");
  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${number}/`
      );
      setPokemon(response.data);
    }
    getData();
  }, [number]);
  return (
    <div>
      <h1>Pick a Movie</h1>
      <h4>{pokemon.name}</h4>
      <select value={number} onChange={(e) => setNumber(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
      </select>
    </div>
  );
}
