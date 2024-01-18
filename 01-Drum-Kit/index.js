
function removeTransition(event) { // Define una función llamada removeTransition que toma un parámetro event.
    if (event.propertyName !== 'transform') return // Verifica si la propiedad que finalizó la transición no es 'transform'. Si no es 'transform', la función se detiene y no hace nada más.
    event.target.classList.remove('playing') // Si la propiedad que finalizó la transición es 'transform', se quita la clase 'playing' del elemento que activó el evento de transición.
}

function playSound(event) { // Define una función llamada playSound que toma un parámetro event.
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`) // Busca un elemento audio cuyo atributo data-key coincida con el código de la tecla que se presionó.
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`) // Busca un elemento div (tecla) cuyo atributo data-key coincida con el código de la tecla que se presionó.
    // console.log(audio)
    // console.log(key)
    if(!audio) return // Si no se encuentra un elemento de audio correspondiente, la función se detiene.
    
    key.classList.add('playing') // Agrega la clase 'playing' al elemento de la tecla para activar la animación visual.
    audio.currentTime = 0 // Retrocede al inicio del sonido.
    audio.play() // Reproduce el sonido asociado al elemento de audio.
}

const keys = Array.from(document.querySelectorAll('.key')) // Selecciona todos los elementos con la clase 'key' y los almacena en un array llamado keys.
keys.forEach(key => key.addEventListener('transitionend', removeTransition)) // Agrega un event listener para el evento transitionend a cada elemento en el array keys, utilizando la función removeTransition como callback.
window.addEventListener('keydown', playSound) //Agrega un event listener para el evento keydown en la ventana (window), utilizando la función playSound como callback. Esto significa que cuando se presiona una tecla, se activará la función playSound.
