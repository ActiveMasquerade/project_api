const request =new XMLHttpRequest();
request.open('GET','https://pokeapi.co/api/v2/pokemon/pikachu');
request.send();
request.addEventListener('readystatechange',()=>{
    if(request.readyState===4&request.status==200){
        
        const data = JSON.parse(request.responseText);
        const img = document.querySelector('.pokeimage');
        img.setAttribute('src',data.sprites.front_default);
    }
    else if(request.readyState==4){
        console.log('image not found');
    }
})
