import "./styles/index.scss"; 

const test = {
    "une": "une",
    "tableau": [
        1, 2, 3
    ]
}

const test2 = {
    ...test, 
    "deux": 2,
    "trois": 3
}

console.log(test)
console.log(test2)