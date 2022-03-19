const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("pokemonsad.gif");
            pokeNOM("pokemonsad.gif");
            pokeTIPO("pokemonsad.gif");
            pokeESTA("pokemonsad.gif");
            pokeMOVI("pokemonsad.gif");
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = `${data.sprites.front_default}`;
            pokeImage(pokeImg);
            console.log(pokeImg);

            pokenombree.innerHTML =`Nombre: ${data.name}`;
            pokeNOM(pokenombree);
            console.log(pokenombree);

            poketipo.innerHTML =`Tipo: ${data.types[0].type.name}`;
            pokeTI(poketipo);
            console.log(poketipo);

            pokeestadistica1.innerHTML =`Base_stat: ${data.stats[0].base_stat}`;
            pokeESTA(pokeestadistica1);
            console.log(pokeestadistica1);
            pokeestadistica2.innerHTML =`effort: ${data.stats[0].effort}`;
            pokeESTA(pokeestadistica2);
            console.log(pokeestadistica2);

            pokemovimiento1.innerHTML =`Movimiento 1: ${data.moves[0].move.name}`;
            pokeMOVI(pokemovimiento1);
            console.log(pokemovimiento1);

            pokemovimiento2.innerHTML =`Movimiento 2: ${data.moves[1].move.name}`;
            pokeMOVI(pokemovimiento2);
            console.log(pokemovimiento2);

            pokemovimiento3.innerHTML =`Movimiento 3: ${data.moves[2].move.name}`;
            pokeMOVI(pokemovimiento3);
            console.log(pokemovimiento3);

        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}
const pokeNOM = (url) => {
    const pokenombree = document.getElementById("pokenombree");
    pokenombree.src = url;
}
const pokeTI = (url) => {
    const poketipo = document.getElementById("poketipo");
    poketipo.src = url;
}
const pokeESTA = (url) => {
    const pokeestadistica1 = document.getElementById("pokeestadistica1");
    pokeestadistica1.src = url;
    const pokeestadistica2 = document.getElementById("pokeestadistica2");
    pokeestadistica2.src = url;
}
const pokeMOVI = (url) => {
    const pokemovimiento1 = document.getElementById("pokemovimiento1");
    pokemovimiento1.src = url;
    const pokemovimiento2 = document.getElementById("pokemovimiento2");
    pokemovimiento2.src = url;
    const pokemovimiento3 = document.getElementById("pokemovimiento3");
    pokemovimiento3.src = url;
}

