const products =[
    {
        id:'1',
        name:'Remera Animal Crossing',
        price:5000,
        category:'remera',
        img:'https://i.imgur.com/WJWn4Zg.jpg',
        stock:25,
        description: 'Remera de Animal Crossing'
    },

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (productId) => {
    return new Promise ((resolve)=> {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise ((resolve)=> {
        setTimeout(() => {
            resolve(products.find(prod => prod.category === productCategory))
        }, 500)
    })
}