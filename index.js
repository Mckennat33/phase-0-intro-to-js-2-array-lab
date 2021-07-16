// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name); 
}

function destructivelyPrependCat(name) {
    cats.unshift(name); 
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name); 
}


function destructivelyRemoveFirstCat(name) {
    cats.shift(name); 
}

function appendCat(name) {
    const newCats = [...cats]
    newCats.push(name); 
    return newCats
} 

function prependCat(name) {
    const newCats = [name, ...cats]
    return newCats
} 

function removeLastCat () { 
    const newCats = cats.slice(0, -1)
    return newCats
}

function removeFirstCat () { 
    const newCats = cats.slice(1)
    return newCats
}








// name is a placeholder - takes in some sort of string. 




