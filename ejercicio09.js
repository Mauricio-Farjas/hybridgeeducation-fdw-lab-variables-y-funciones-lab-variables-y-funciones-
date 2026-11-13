// Ejercicio 9: Calcular el promedio de 5 números
// Declara una función llamada "calcularPromedio" que acepte 5 parámetros "n1", "n2", "n3", "n4", "n5" y devuelva el promedio de los 5 números.

//escribe tu función aquí. Recuerda que el nombre de la función debe ser exactamente "calcularPromedio" y que debe recibir exactamente 5 parámetros

calcularPromedio = (n1, n2, n3, n4, n5) => {
    // Calcula la suma de los 5 números
    const suma = n1 + n2 + n3 + n4 + n5;
    // Calcula el promedio dividiendo la suma entre 5
    const promedio = suma / 5;
    // Devuelve el promedio
    return promedio;
}
// Exporta la función para que pueda ser utilizada en las pruebas
module.exports = { calcularPromedio };
