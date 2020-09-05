window.addEventListener("load", ()=>{
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");

    const colors = [
        "lightcoral",
        "lightgreen",
        "rgb(68, 206, 224)",
        "rgb(164, 98, 180)",
        "rgba(35, 46, 141, 0.979)",
        "yellow"
    ];
    

    pads.forEach((pad, index) =>{
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0;
            sounds[index].play();
         
            createBubbles(index);
          
        });
    });

    const createBubbles = (index) =>{
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.background = colors[index];
        bubble.style.animation = "jump 1s ease";

        bubble.addEventListener("animationend", function(){
            visual.removeChild(this);
        })
    }
   
});