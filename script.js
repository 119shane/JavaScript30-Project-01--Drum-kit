// code function expalin comments are included as study purpose 

window.addEventListener('keydown', (e)=>{
    // as we do not give specific id or class for our keys we have to add event listner to pressed key event (e) and select it via 
    // query selector method key => by ".class + event.keyCode"
    //                       audio => by "audio tag name + event.keyCode"

    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)

    if (!audio) return //filtering other key board keys from functioning
    audio.currentTime = 0 // if not sound plays only once
    audio.play()
    key.classList.add('playing') //add this class list for styling key when pressing
})

// now most of works are done in our app, but we need to remove "playing" class from key after every play
// when a key pressed transition happens (style shee: line 39) so we can take that "transition" as a event (that event
// contain all properties relevent to above transistion, in this case transform [scale], box shadow and backG color) and 
// remove "playing" class just after transition happens
// 

const keys = document.querySelectorAll('.key')
keys.forEach(key=> key.addEventListener('transitionend', (e)=> {
    if (e.propertyName !== "background-color") return
    e.target.classList.remove("playing")
   
}))