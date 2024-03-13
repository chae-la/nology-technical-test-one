import "./styles/style.scss";
import pokemonArray from "./data/pokemon";

const cardContainer = document.querySelector<HTMLDivElement>(".card-container");

if (!cardContainer) {
  throw new Error("Error with Selector");
}

const renderPokedex = () => {
  pokemonArray.forEach((pokemon) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const image = document.createElement("img");
    image.src = pokemon.sprite;
    image.classList.add("card__image");

    const content = document.createElement("content");
    content.classList.add("card__content");

    const heading = document.createElement("heading");
    const capitalName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    heading.textContent = `${capitalName}`;
    heading.classList.add("card__heading");

    const text = document.createElement("text");
    const twoTypes =
      pokemon.types.length > 1
        ? `${pokemon.types[0]} & ${pokemon.types[1]}`
        : pokemon.types[0];
    text.textContent = `${capitalName} (#${pokemon.id}) is a ${twoTypes} type Pokémon.`;
    text.classList.add("card__text");

    content.appendChild(heading);
    content.appendChild(text);
    card.appendChild(image);
    card.appendChild(content);
    cardContainer.appendChild(card);
  });
};
renderPokedex();

