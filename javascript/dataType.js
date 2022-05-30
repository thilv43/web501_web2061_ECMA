/* eslint-disable no-plusplus */
/* eslint-disable no-console */
// const info = {
//     name: "Thi",
//     age: 20,
//     run(){
//         console.log(`${info.name} đẹp zai`);
//     }
// }
// console.log(`${info.name} ${info.age}`);
// info.run();

// const app = document.getElementById('app');
// if(app) {
//     app.innerHTML = `${info.name} ${info.age}`;
// }

// const Products = [
//     {
//         id: 1,
//         name: "Products A",
//         price: 200,
//     },
//     {
//         id: 2,
//         name: "Products B",
//         price: 300
//     },
//     {
//         id: 3,
//         name: "Products C",
//         price: 400
//     }
// ]

import Products from "../src/model/data";

function showProduct(product) {
    let resul = "";
    if (!Array.isArray(product) || product.length === 0) { return null; }
    for (let i = 0; i < product.length; i++) {
        console.log(product[i]);
        resul += `<div>name:${product[i].name} -  price:${product[i].price}</div>`;
    }
    return resul;
}
showProduct(Products);

const app = document.getElementById("app");
if (app) {
    app.innerHTML = showProduct(Products);
}