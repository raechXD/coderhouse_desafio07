//DESAFIO 07 
//ALUMNA: ROSA ESTRELLA CHAMORRO
const express = require('express');

//llamando al puerto
const puerto = 8080;
const app = express();

const server = app.listen(puerto, () => 
    console.log('Server Up en puerto', puerto)
);

server.on('error', (err) => {
    console.log('Error => ', err);
})



// Objeto productos
const lProductos = [
	{
		"id": 1,
		"title": "Arroz",
		"price": 155000,
		"thumbnail": "/urlProd1"
	},
	{
		"id": 2,
		"title": "Chocolate",
		"price": 155000,
		"thumbnail": "/urlProd2"
	},
	{
		"id": 3,
		"title": "Tomate",
		"price": 155000,
		"thumbnail": "/urlProd3"
    },

    {
		"id": 4,
		"title": "Aceite",
		"price": 155000,
		"thumbnail": "/urlProd4"
    }

];

//crear la apis 

//ruta1
let cantidadVisitasruta1 = 0;
const cantidadProductos = lProductos.length;
app.get('/api/items', (req, res) => {
    cantidadVisitasruta1 = cantidadVisitasruta1+1;
    res.json({
        items:lProductos, 
        cantidad: cantidadProductos
    })
});

//ruta2
let cantidadVisitasruta2 = 0;
app.get('/api/item-random', (req, res) => {
    cantidadVisitasruta2 = cantidadVisitasruta2+1;
    let productoAlAzar = 0;
    productoAlAzar = Math.floor(Math.random() * (cantidadProductos - 0) + 0);
    res.json({
        items:lProductos[productoAlAzar]
    })
});

//ruta3
app.get('/api/visitas', (req, res) => {
    res.json({
        vistas:{
            items:cantidadVisitasruta1,
            item:cantidadVisitasruta2
        }
    })
});



