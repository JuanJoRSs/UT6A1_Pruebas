
function divide(a, b) {
   
    // Si 'a' o 'b' NO son números (son strings, etc.), devolvemos null
    if (typeof a !== 'number' || typeof b !== 'number') {
        return null;
    }

    if (b === 0) {
        return null;
    }

    return a / b;
}

export default divide;