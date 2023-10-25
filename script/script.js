// Función principal 
function fibonacci() {
    // Obtener elementos del DOM
    const numeroInput = document.getElementById("numeroCalcular");
    const mostrarResultado = document.getElementById("resultado");

    // Obtener el valor del input y convertirlo a un número
    const numero = parseInt(numeroInput.value);

    // Validar si es un número
    if (!isNaN(numero)) {
        // Crear un array para almacenar la sucesión
        const sucesion = [];

        // Calcular y almacenar la sucesión
        for (let i = 0; i < numero; i++) {
            sucesion.push(calcularFibonacci(i));
        }

        // Mostrar la sucesión en el DOM
        mostrarResultado.innerText = sucesion.join(", ");
        numeroInput.value = "";
    } else {
        numeroInput.value = "";
        mostrarResultado.innerText = "";
        // Error en caso de que no se ingrese un número
        alert(
            "El valor ingresado no es un número. Por favor, ingrese un dato válido y vuelva a intentarlo."
        );
    }
}

// Función para calcular el número de Fibonacci de manera recursiva
function calcularFibonacci(numero) {
    if (numero <= 1) {
        return numero;
    } else {
        return calcularFibonacci(numero - 1) + calcularFibonacci(numero - 2);
    }
}