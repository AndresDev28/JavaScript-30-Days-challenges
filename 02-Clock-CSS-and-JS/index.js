// Selecciona los elementos HTML que representan las agujas del reloj
const aguja_seg = document.querySelector('.segundos-aguja')
const aguja_min = document.querySelector('.minutos-aguja')
const aguja_horas = document.querySelector('.horas-aguja')

// Función que se llama repetidamente cada segundo para actualizar la posición de las agujas
function setDate() {
    // Crea un nuevo objeto de fecha que representa la fecha y hora actuales con el contructor Date
    const now = new Date()
    
    // Segundero: se encarga de obtener los segundos actuales del objeto de fecha 'now'
    const seconds = now.getSeconds()
    /* Convierte los segundos en grados y posiciona el segundero a 90 grados */ 
    const secondsDegrees = ((seconds/ 60) * 360) + 90 
    aguja_seg.style.transform = `rotate(${secondsDegrees}deg)`
    
    // Minutero: igual que const second pero para los minutos
    const minutes = now.getMinutes()
    const minutesDegrees = ((minutes/ 60) * 360) + 90 /* Convierte los minutos en grados y posiciona en posiciona en 12H */
    aguja_min.style.transform = `rotate(${minutesDegrees}deg)`

    // Horas: se encarga de obtener la hora actual del objeto de fecha 'now'
    const hours = now.getHours()
    const hoursDegrees = ((hours/ 12) * 360) + 90 /* Convierte las horas en grados y posiciona en posiciona en 12H */
    aguja_horas.style.transform = `rotate(${hoursDegrees}deg)`

    console.log(seconds, minutes, hours)
}

// Llama a la función setDate cada segundo (1000 miliseg)
setInterval(setDate, 1000)
