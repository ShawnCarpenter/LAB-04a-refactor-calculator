export function add(first, second) {
    return Number(first) + Number(second);
}

export function subtract(first, second) {
    return Number(first) - Number(second);
}

export function multiply(first, second) {
    return Number(first) * Number(second);
}


export function divide(first, second) {
    return Number(first) / Number(second);
}


export function getNumber(id) {
    const element = document.getElementById(id);
    const entry = element.value;
    return Number(entry);
    //Which would be better?
    // return Number(document.getElementById(id).value);
}