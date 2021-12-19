//To take input key
let total_keys = document.querySelectorAll('.key').length;
// Adding sound notes

for(let i=0; i<total_keys; i++){
    document.querySelectorAll('.key')[i].addEventListener('click', function(){
        let input = this.value;
        playSound(input);
        keyAnimation(input);
    });
}

document.addEventListener('keypress', function(event){
    playSound(event.key);
    keyAnimation(event.key);
})

function playSound(k){
    if(k==="a" || k==="o"){
      new Audio("Assets/note_A.mp3").play();
    }else if(k==="b" || k==="p"){
      new Audio("Assets/note_Csharp.mp3").play();
    }else if(k==="c" || k==="q"){
      new Audio("Assets/note_D.mp3").play();
    }else if(k==="d" || k==="r"){
      new Audio("Assets/note_Dsharp.mp3").play();
    }else if(k==="e" || k==="s"){
      new Audio("Assets/note_E.mp3").play();
    }else if(k==="f" || k==="t"){
      new Audio("Assets/note_F.mp3").play();
    }else if(k==="g" || k==="u"){
      new Audio("Assets/note_Fsharp.mp3").play();
    }else if(k==="h" || k==="v"){
      new Audio("Assets/note_G.mp3").play();
    }else if(k==="i" || k==="w"){
      new Audio("Assets/note_Gsharp.mp3").play();
    }else if(k==="j" || k==="x"){
      new Audio("Assets/note_A.mp3").play();
    }else if(k==="k" || k==="y"){
      new Audio("Assets/note_Asharp.mp3").play();
    }else if(k==="l" || k==="z"){
      new Audio("Assets/note_B.mp3").play();
    }

}
function keyAnimation(currentKey){
    let activeBtn = document.querySelector('.' + currentKey);
    activeBtn.classList.add('press');

    setTimeout(() => {
        activeBtn.classList.remove('press');
    }, 100)
}
