import { pokemonData } from "./data.js"

function created  (){
    for(let i=0;i<pokemonData.length; i++){
        const card= document.createElement("div");
        card.textContent=pokemonData[i].name ;
        
       
        const pokemonImg=document.createElement("img");
        pokemonImg.src= "./assets/" + pokemonData[i].thumbnail;
        card.appendChild(pokemonImg);
        document.body.appendChild(card);
        console.log(pokemonImg.src);
        


    }
}
created();



const pokemonList = document.getElementById("pokemonList");
const search =document.getElementById("search");
let displayPokemon= pokemonData;
//displayPokemon(pokemonData);



//pokemonName.appendChild(node);