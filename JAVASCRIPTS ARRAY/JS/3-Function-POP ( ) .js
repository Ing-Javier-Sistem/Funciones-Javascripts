function Array_pop(){
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const arrayEliminadoUltimo = array.pop();
    return `Se elimina el ultimo elemento del array y se lo devuelve "${arrayEliminadoUltimo}" 
    y asi queda el nuevo array ${array}`

    // LA FUNCION DE JS elimina el ultimo valor del array y lo devuelve 
}

const llamar = Array_pop()
console.log(llamar)