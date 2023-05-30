

const products = [
    {
        id: '1',
        name: 'Conjunto Estampa Osito',
        price: 1000,
        category: 'Nenes',
        img:'https://simpakids.b-cdn.net/Content/UploadDirectory/products/7248/image_8a278007-a9f4-4591-b605-98c7bd8d822c.jpg',
        stock: 25,
        description: 'Descripcion de Iphone 12'
    },
    {
        id:'2',
        name: 'Pantalon liso', 
        price: 800,
        category: 'Nenas',
        img:'https://simpakids.b-cdn.net/Content/UploadDirectory/products/4536/image_eb66c2d5-a147-42bf-8694-8cc40db87224.jpg',
        stock: 25,
        description:'Descripcion de Samsung S21'
    },
    {
        id:'3',
        name: 'Body Dino', 
        price: 1500,
        category: 'Bebes',
        img:'https://simpakids.b-cdn.net/Content/UploadDirectory/products/4528/image_94ea7198-01f9-4952-9812-b938246d683e.jpg',
        stock: 25,
        description:'Descripcion de Samsung S22'
    },
]

export const getProducts = () => {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}