const misProductos = [
    { id: "1", nombre: "Sansung A23", stock:10, precio: 1500, img: "../img/Celular1.jpg", idCat: "2" },
    { id: "2", nombre: "Iphone 14", stock:10, precio: 100000, img: "../img/Iphone.jpg", idCat: "2" },
    { id: "3", nombre: "Iphone 8", stock:10, precio: 1500, img: "../img/Celular.jpg", idCat: "2" },
    { id: "4", nombre: "Nokia Pro Max", stock:10, precio: 100000, img: "../img/Celular3.jpg", idCat: "2" },
    { id: "5", nombre: "Redmi Note 3", stock:10, precio: 1500, img: "../img/Celular4.jpg", idCat: "2" },
    { id: "6", nombre: "Redmi Note 9", stock:10, precio: 100000, img: "../img/Celular5.jpg", idCat: "2" },

    { id: "7", nombre: "Notebook",stock:10, precio: 140000, img: "../img/notebook.jpg", idCat: "3" },
    { id: "8", nombre: "Notebook Venex",stock:10, precio: 160000, img: "../img/notebook2.jpg", idCat: "3" },
    { id: "9", nombre: "Notebook HP",stock:10, precio: 120000, img: "../img/notebook3.jpg", idCat: "3" },
    { id: "10", nombre: "Notebook Alienware",stock:10, precio: 110000, img: "../img/notebook4.jpg", idCat: "3" },
    { id: "11", nombre: "Notebook Asus",stock:10, precio: 100000, img: "../img/notebook5.jpg", idCat: "3" },
    { id: "12", nombre: "Notebook Velcel",stock:10, precio: 170000, img: "../img/notebook6.jpg", idCat: "3" },


    { id: "13", nombre: "Tablet Tosiva",stock:10, precio: 700, img: "../img/tablet.jpg", idCat: "4" },
    { id: "14", nombre: "Tablet Nokia",stock:10, precio: 900, img: "../img/Tablet1.jpg", idCat: "4" },
    { id: "15", nombre: "Tablet Eliux",stock:10, precio: 700, img: "../img/Tablet2.jpg", idCat: "4" },
    { id: "16", nombre: "Tablet Samsung",stock:10, precio: 900, img: "../img/Tablet3.jpg", idCat: "4" },
    { id: "17", nombre: "Tablet Hyudai",stock:10, precio: 700, img: "../img/Table4.jpg", idCat: "4" },
    { id: "18", nombre: "Tablet Amelk",stock:10, precio: 900, img: "../img/Tablet5.jpg", idCat: "4" },

    { id: "19", nombre: "Impresora Tosiva",stock:10, precio: 700, img: "../img/Impresora.jpg", idCat: "5" },
    { id: "20", nombre: "Impresora delux",stock:10, precio: 900, img: "../img/Impresora1.jpg", idCat: "5" },
    { id: "21", nombre: "Impresora Hilux",stock:10, precio: 700, img: "../img/Impresora2.jpg", idCat: "5" },
    { id: "22", nombre: "Impresora Samsung",stock:10, precio: 900, img: "../img/Impresora3.jpg", idCat: "5" },
    { id: "23", nombre: "Impresora Simply",stock:10, precio: 700, img: "../img/Impresora4.jpg", idCat: "5" },
    { id: "24", nombre: "Impresora Express",stock:10, precio: 900, img: "../img/Impresora5.jpg", idCat: "5" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 500)
    })
}


/*Actividad n° 3 Detalle de un Producto I */

/*Creamos una función similar a la anterior pero que solo nos retorne un solo item*/

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = misProductos.find(item => item.id === id);
            resolve(producto);
        }, 100)
    })
}

//Creamos una función que retorne toda una categoria: 

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = misProductos.filter(item => item.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}