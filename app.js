const sound_1 = document.querySelector(".sound_1")
const sound_2 = document.querySelector(".sound_2")
const sound_3 = document.querySelector(".sound_3")
const sound_4 = document.querySelector(".sound_4")
const sound_5 = document.querySelector(".sound_5")

function play_selected_track(button, mp3){
    button.addEventListener("click", ()=>{
            button.classList.add("btn-secondary")
            let play_sound = new Audio(mp3).play();
            console.log("help me")
            return play_sound;

    })
}

play_selected_track(sound_1, "sounds/microsoft.mp3")
play_selected_track(sound_2, "sounds/mgm.mp3")
play_selected_track(sound_3, "sounds/netflix.mp3")
play_selected_track(sound_4, "sounds/pornhub.mp3")
play_selected_track(sound_5, "sounds/playstation.mp3")