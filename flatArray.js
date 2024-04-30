const list = [1, [2, 3, [4, 5, [6]]]];

// Función matriz
function flatArr(arr) {
    let result = [];

    arr.forEach((element) => {
        if (Array.isArray(element)) {
            result = result.concat(flatArr(element));
        } else {
            result.push(element);
        }
    });

    return result;
}

const arrFlat = flatArr(list);

// Mostrar original y flat. 
console.log("Matriz original:", list);
console.log("Matriz flat:", arrFlat);