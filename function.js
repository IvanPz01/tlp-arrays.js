// Actividad N°1

let edad;

function esMayorDeEdad(edad) {
  if (edad >= 18) {
    return true;
  } else if (edad <= 17) {
    return false;
  }
}

console.log(esMayorDeEdad(17));

// Actividad N°2
let base, altura, area;

function calcularAreaRectagulo(base, altura) {
  return (area = base * altura);
}

console.log(calcularAreaRectagulo(20, 30));

// Actividad N°3
let cadena;

function esPalindromo(cadena) {
  let minCadenda = cadena.toLowerCase("");
  let array = minCadenda.split("");
  let reverse = array.reverse();
  let palindromo = reverse.join("");
  if (cadena == palindromo) {
    return true;
  } else if (cadena != palindromo) {
    return false;
  }
}

console.log(esPalindromo("oso"));

// Actividad N°4

let Num;

function generarNumerosAleatorios(Num) {
  return Math.floor(Math.random() * Num);
}

console.log(generarNumerosAleatorios(10));
