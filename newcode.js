const mega = document.querySelector('.mega');
const button = document.querySelector('.go');
const input = document.querySelector('.search');
let texttype='';
let textability='';
const main = function(){
    textability='';
    texttype='';
    const request =new XMLHttpRequest();
    let SearchTerm = input.value.toLowerCase();
    request.open('GET',`https://pokeapi.co/api/v2/pokemon/${SearchTerm}`);
    request.send();
    request.addEventListener("readystatechange",function(){
        if(request.readyState===4 && request.status===200){
            const data = JSON.parse(request.responseText);
            

            // type.innerText += data.types[0].type.name;
            if(data.types.length>1){
                texttype += data.types[0].type.name + ',' + data.types[1].type.name;
                console.log('if')
            }
            else{
                texttype += data.types[0].type.name;
            }    
            
            data.abilities.forEach(element => {
                textability += element.ability.name;
                textability += ',';
            });
            textability = textability.slice(0,-1);
            console.log(data.sprites.other["official-artwork"].front_default);
            mega.innerHTML = `
        <div class="card">
            <div style="height: 200px; width: 200px;"><img src="${data.sprites.other['official-artwork'].front_default}" class="pokeimage"></div>
            <div class="text"><pre class="type">types:${texttype}</pre>
            <pre class="ability">abilities:${textability}
            </pre></div>
        </div>`+mega.innerHTML;
        
        }
        else if(request.readyState===4){
            mega.innerHTML+= `<p style="color:red;">enter a valid pokemon name</p>`;
        }
    });
}   
const clean = function(){
    mega.innerHTML= ``
}
button.addEventListener("click", function(){
    main();
});
const clear = document.querySelector('.clear');
clear.addEventListener("click",function(){
    clean();
    console.log('clear')
})