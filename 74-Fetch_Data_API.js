// fetch
// function is used for making HTTP requests ti fetch resources
// json style data, images, files
// simplifies asynchronous data fetching in JS 
// used for interacting with APIs to retrieve and send data asynchronously over the web
// fetch (url, {options})
// 

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => {
        if(!response.ok){
            throw new Error("could not fetch resouse");
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error(error));


async function fetchData(){
    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();


        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("could not fetch resouse");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
        
        console.log(data);
    }
    catch(error){
        console.error(error)
    }
}