let buttons = document.querySelectorAll(".btn")
let sounds = {"a":"clap.wav", "s":"drum.wav", "d":"hithat.wav", "f":"kick.wav", "g":"openhat.wav", "h":"ride.wav", "j":"snare.wav", "k":"tink.wav", "l":"tom.wav"}

function get_sound_url(sound){
    return `./sounds/${sound}`
}

document.addEventListener("keydown", function(e){
    let pressed = e.key
    if (Object.keys(sounds).includes(pressed)){
        let audio = new Audio(get_sound_url(sounds[pressed]))
        audio.play()
        e.target.classList.toggle("press")
        btn = e.target.querySelector(`#${pressed}`)
        btn.classList.toggle("press")
        setTimeout(function(){btn.classList.toggle("press")},80)
    }
})