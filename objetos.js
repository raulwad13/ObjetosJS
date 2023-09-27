// BIKRAM OBJETOS
// Declaraciones:
// 1

let Car = {
    marca: " ",
    modelo: " ",
    matricula: " ",

}
// 2

let casa = {
    codPostal:" ",
    calle: " ",
    portal:" ",
    piso:" ",
}
// 3

let FullStackDeveloper = {
    array:" ",
    lenguajes:" ",
    arrayproyectps:" ",

}
// 4

let perro = {
    nombre:"kamal",
    raza:"pitbull",
    color:"negro",
    edad:"11",
    ladrar: function () {
    
        
    return "woof"
    
}
}
console.log(perro.ladrar())


// Lectura de propiedades
// 5

let portatil  = {
    marca:"asus",

}

let marcaPortatil = portatil.marca;
console.log(marcaPortatil)

// 6

let portatil2 = {
    marca:"lenovo",

}

// 7 

let concierto = {
    arrayGrupos:[1,2,3]

}
let grupos = concierto.arrayGrupos;
console.log(grupos)

// 8

let led = {
    rojo:"rojo",
    verde:"verde",
    azul:"azul",

}
let RGB = [led.rojo,led.verde,led.azul]
console.log(RGB)

// Modificación de Propiedades
// 9

let portatil3 = {
    modelo: 234,

}
portatil3.modelo= "P345"
console.log(portatil3.modelo)

// 10

let concierto2 = {
    cartelera:"",
}
concierto2.cartelera= "Guns N' Roses"
console.log(concierto2.cartelera)

// 11

let concierto3 = {
    fecha:"",

}
concierto3.fecha = new Date()
console.log(concierto3.fecha)

// 12
let impresora = {
    imprimiendo:"",
}
impresora.imprimiendo = {
    nombreArchivo:"",
    copias:"",
    numPaginas:"",

}
console.log(impresora.imprimiendo)

// OBJETOS2
// 13

let noticia = {
    titular:"",
    cuerpo:"",

}

// 14
let persona = {
    nombre:"",
    apellido:"",
    edad:"",

}

// 15
let avion = {
    numPasajero:"",

    despegar: function () {
        return "despegando"
    },

    volar: function () {
        return "volando"
    },

    aterrizar: function () {
        return "aterrizando"
    }

}
console.log(avion.volar)

// 16 
let paquete = {
    arrayContenido: ["plastico","espuma","ropa"]

}
console.log(paquete.arrayContenido)

// 17
let plais = {
    numHabitantes:"",
    continente:"",
    gentilicio:"",
}

// Lectura de Propiedades
// 18
let o_error = {
    codError:["codigo"]

}
console.log(o_error.codError)

// 19
let grupo = {
    integrantes: ["arrayIntegrantes"]
}
console.log(grupo.integrantes)

// 20
let impresora2 = {

    tinta: {
        rojo:"valor rojo",
        verde:"valor verde",
        azul:"valor azul",

    }
}
let nivelesTinta = impresora2.tinta
console.log(nivelesTinta)


// 21
let pantalla = {
    array: [[1], [2]],
  };
  
  let pixeles = pantalla.array[0] + ", " + pantalla.array[1];
  
  console.log(pixeles);

// 22
let movil = {
    especificaciones: "especificaciones",

}
let variableEsp = movil.especificaciones
console.log(variableEsp)

// Modificaciones
// 23
let Grupo = {
    numintegrantes: "",

}
Grupo.numintegrantes = 5;
console.log(Grupo.numintegrantes)

// 24
let pantalla2 = {
    dimensiones:"",

}
pantalla2.dimensiones= "1920x1080";
console.log(pantalla2.dimensiones)

// 25
let led2 = {
    encendido: true,


}
if(!led2.encendido) {
    led2.encendido = true
}else {
    led2.encendido = false
}

console.log(led2.encendido)

// 26
let movil2 = {
    temperatura:"",
}
movil2.temperatura = "20º"
console.log(movil2.temperatura)