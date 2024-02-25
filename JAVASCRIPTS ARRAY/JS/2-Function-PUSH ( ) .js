function Array_push(num, texto){
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    array.push(num);
    array.push(texto);
    
    // LA FUNCION DE JS agrega valores al array

    return array; 
}

const llamar = Array_push(10, 'Hola Mundo!');
console.log(llamar);
