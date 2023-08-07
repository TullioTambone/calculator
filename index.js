let display = document.getElementById('display')
let input = document.querySelectorAll('.number')
let storico = document.getElementById('storico')

console.log(display, input)

// funzione per inserire nel display
input.forEach(element => {

    element.addEventListener('click',() =>{
        display.value += element.value

        // sintassi per il punto
        if (element.value == '.' && display.value == '.') {
            display.value = '0.'
        }
    })
});

//<-----------------------------funzioni------------------------->

// funzione per eliminare tutto nel display
function del(){
    display.value = ''
}

// funzione per eliminare il singolo dato nel display
function cancel(){
    display.value = display.value.slice(0, -1)
}
function clearAll(){
    storico.innerHTML = ' <button id="clear" onclick="clearAll()">clear</button>'
}

//logica per il risultato
function result(){
    let before = display.value
    if (before.includes('+') || before.includes('*') || before.includes('/') || before.includes('-')){
        let result = eval(display.value)
        display.value = result
    
        storico.innerHTML += `<p> ${before} = ${result} </p>`
        
    }
}