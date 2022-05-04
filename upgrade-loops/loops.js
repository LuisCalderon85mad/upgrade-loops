/***Iteración #1: Usa includes**

Haz un bucle y muestra por consola todos aquellos valores  del array que incluyan la palabra "Camiseta". Usa la función .***includes*** de javascript. */

// Extraer si son true o false

const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinturón de Orón",
  "ACDC Camiseta",
];

for (const product of products) {
  console.log(product.includes("Camiseta"));
}

// Extraer los productos que tengo
const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinturón de Orón",
  "ACDC Camiseta",
];

for (const product of products) {
  console.log(product);
}

//Bucle + include + crear array vacío + push
const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinturón de Orón",
  "ACDC Camiseta",
];
const productoFiltrado = [];

for (const product of products) {
  if (product.includes("Camiseta")) 
  productoFiltrado.push(product) 
};

console.log(productoFiltrado);


/* **Iteración #2: Condicionales avanzados** (FAIL)

Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad ***isApproved*** a true o false en consecuencia. Una vez lo tengas compruébalo con un ***console.log***.

Puedes usar este array para probar tu función: */

const alumns = [
        {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

for (const alumn of alumns) {
    if (alumns.T1 === false || alumns.T2 === false || alumns.T3 === false ) {
        isApproved = false;
    } else {
        isApproved = true; 
    }
    
}

console.log(alumns);



/* **Iteración #3: Probando For...of**

Usa un bucle forof para recorrer todos los destinos del array. Imprime en un ***console.log*** sus valores. */

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']; 

for (const places of placesToTravel){
    console.log(places);
}

/* **Iteración #4: Probando For...in**

Usa un **for...in** para imprimir por consola los datos del alienígena.. Puedes usar este objeto: */ 

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

/for (const data in alien){
    console.log(alien[data]);
}


/*
**Iteración #5: Probando For** (FAIL)

Usa un bucle **for** para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Imprime en un ***console log*** el array. Puedes usar este array: */

// Con bucle for of 
const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

for (const newPlaces of placesToTravel){
    if (placesToTravel.id === 11 || placesToTravel.id === 40){
        placesToTravel.splice(0, length)
    }
}

console.log(placesToTravel);


// Con bucle for
const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

for (let i=0; i<placesToTravel.length; i++){
    if (placesToTravel.id === 11 || placesToTravel.id === 40){
        placesToTravel.splice(0, 4)
    }
}

console.log(placesToTravel);


/* **Iteración #6: Mixed For...of e includes** (FAIL)

Usa un bucle **for...of** para recorrer todos los juguetes y elimina los que incluyan la palabra gato. Recuerda que puedes usar la función ***.includes()*** para comprobarlo.Puedes usar este array: */ 

const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ]

//const newToys = []; 

for (const toy of toys){
    if (toy.name.includes("gato")){
        toys.splice(0, length);
    }
}

console.log(toys);


/* ¿TIENE SENTIDO?
const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ]

const newToys = toys.filter(toys => toys.name != "gato"); 
console.log(newToys);*/
 


/* **Iteración #7: For...of avanzado**

Usa un bucle **for...of** para recorrer todos los juguetes y añade los que tengan más de 15 ventas (sellCount) al array popularToys. Imprimelo por consola.. Puedes usar este array: */

const toys = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
]

const popularToys = [];

for (const toy of toys){
    if (toy.sellCount > 15){
        popularToys.push(toy)
    }
}

console.log(popularToys);

