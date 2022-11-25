// function saludo() {
//     console.log("¡Bienvenid@ a Hoshinoya Fuji Resort!");
// }

// saludo() ;

// let nombre = prompt("Por favor ingrese su nombre");
// if (nombre == "") {
//     alert("No ingresó su nombre");
// }
// else {
//     alert("Un gusto, " + nombre);
// }


// let ciudad = prompt("Ahora, por favor ingrese su ciudad")
// if (ciudad == "") {
//     alert("No ingresó su ciudad");
// }
// else {
//     alert("Ciudad ingresada: " + ciudad);
// }

// const usuario1 = { nombre: (nombre),
//                    ciudad: (ciudad),
//                 } 

// console.log(usuario1.nombre)
// console.log(usuario1.ciudad)

// saludo() ;

// let cantidad = prompt("¿Viaja solo o acompañado? (si va acompañado, especifique la cantidad total de viajantes incluído ud)")
// if ((cantidad == "solo") || (cantidad == "Solo") || (cantidad == "SOLO")){
//     alert("Viaje para 1, " + nombre + ", ¡entendido!");
// }
// else {
//     alert("Viaje para " + cantidad + ", ¡anotado!");
// }



//declaración de array
// const listaNombres = [];
// let   cantPers     = 6;      //max de personas por habitación

//do...while para cargar nombres en el array por medio de prompt()
// do{
//    let entrada = prompt("Ingresar nombres de los acompañantes");
//    listaNombres.push(entrada.toUpperCase());
//    console.log(listaNombres.length);
// }while(listaNombres.length = cantidad)


// let titulo = document.getElementById("titulo")
// console.log( titulo.innerText ) 

// //cambio el contenido del elemento
// titulo.innerText = “Bienvenido tutor!”
// console.log( titulo.innerText )



// let container = document.getElementById("contenedor")

// // cambio el código HTML interno
// container.innerHTML = “<><h2>buenas!</h2><p>Lorem ipsum</p></>”


//evento mouse
let boton = document.getElementById("botonid")
boton.onmousemove = () => {console.log("Movimiento")}
boton.onclick = () => {console.log("Click!")}


// evento tecla
let input1  = document.getElementById("nombre")
input1.addEventListener(`input1`, () => {
     console.log(input1.value)
})

let miFormulario      = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);


function validarFormulario(e){
    //Cancelamos el comportamiento del evento
    e.preventDefault();
    console.log("Datos registrados:")
    //Obtenemos el elemento desde el cual se disparó el evento
    let formulario = e.target
    //Obtengo el valor del primero hijo <input type="text">
    console.log(formulario.children[1].value); 
    //Obtengo el valor del segundo hijo <input type="number"> 
    console.log(formulario.children[4].value);  
}

const btn1 = document.querySelector('#botonid')
btn1.addEventListener('click', () => {

    Swal.fire({
        title: 'Hecho!',
        text: 'Sus datos han sido registrados con éxito',
        icon: 'success',
        confirmButtonText: 'Genial'
})
})

let btn2 = document.getElementById("btn2")
btn2.onclick = () => {console.log("Click al toast1")}

btn2.addEventListener('click', () => {
   
    Toastify({
        text: "Toast 1!",
        duration: 2000,
        gravity: 'bottom',
        position: 'left',
        style: {
            background: 'linear-gradient(to right, #00b09b, #96c92d)'
        },


        onClick: () => {

            Toastify({
                text: 'Toast 2!',
                duration: 2500,
                position: 'left',
                destination: 'https://www.coderhouse.com',
                stopOnFocus: true
            }).showToast()
        }
    
    }).showToast();    
})

// almaceno info con setItem
localStorage.setItem('bienvenida', 'Welcome! :)');
let mensajeConsola =  localStorage.getItem('bienvenida');
console.log(mensajeConsola);

localStorage.setItem('paquete6p', 'paquete para 6 personas: habitación, comida, etcetc');
let mensajeConsola2 = localStorage.getItem('cantp');
console.log(mensajeConsola2);

//JSON
const paquete1 = { id: 2, paquete: "6pers" };
const enJSON    = JSON.stringify(paquete1);

console.log(enJSON);
console.log(typeof paquete1);
console.log(typeof enJSON);

localStorage.setItem("paquete1", enJSON);

fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'HFR',
            body: 'Primera prueba',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((data) => console.log(data))

