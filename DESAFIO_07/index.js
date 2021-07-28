//DESAFIO 07 
//ALUMNA: ROSA ESTRELLA CHAMORRO
const express = require('express');

const puerto = 8080;
const app = express();

//console.log('Hola Rossy y Sandra');

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

//crear la app
let cantidadVisitasruta1 = 0;
const cantidadProductos = lProductos.length;
app.get('/api/items', (req, res) => {
    cantidadVisitasruta1 = cantidadVisitasruta1+1;
    res.json({
        //data:'Hola Rossy'
        items:lProductos, 
        cantidad: cantidadProductos
    })
});

let cantidadVisitasruta2 = 0;
app.get('/api/item-random', (req, res) => {
    cantidadVisitasruta2 = cantidadVisitasruta2+1;
    res.json({
        //data:'Hola Rossy'
        items:lProductos[3], 
        //RANDOM (LIMITE DESDE Y HASTA)
    })
});


app.get('/api/visitas', (req, res) => {
    res.json({
        //data:'Hola Rossy',
        vistas:{
            items:cantidadVisitasruta1,
            item:cantidadVisitasruta2
        }
    })
});



