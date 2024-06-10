const img = document.querySelector('.pokeimage');
const button = document.querySelector('.go');
const input = document.querySelector('.search');
let type = document.querySelector('.type');
let ability = document.querySelector('.ability');

const main = function(){
    
    const request =new XMLHttpRequest();
    type.innerText='types:        '
    ability.innerText='abilities:   '
    let SearchTerm = input.value.toLowerCase();
    request.open('GET',`https://pokeapi.co/api/v2/pokemon/${SearchTerm}`);
    request.send();
    request.addEventListener("readystatechange",function(){
        if(request.readyState===4 && request.status===200){
            const data = JSON.parse(request.responseText);
            img.setAttribute('src',data.sprites.other['official-artwork'].front_default);
            img.classList.remove('hidden')
            // type.innerText += data.types[0].type.name;
            if(data.types.length>1){
                type.innerText += data.types[0].type.name + ',' + data.types[1].type.name;
            }
            else{
                type.innerText += data.types[0].type.name;
            }    
            
            data.abilities.forEach(element => {
                ability.innerText += element.ability.name;
                ability.innerText += ',';
            });
            ability.innerText = ability.innerText.slice(0,-1);
        }
    });
    
}   
button.addEventListener("click", function(){
    main();
});