// const { categories, products } = require("../db"); 
// exports.Query = {
//     hello: () => "Hello", 
//     products: () => products, 
//     product: (parent, args, context) => {
//         // console.log(args);
//         // const productId = args.id;
//         // const product = products.find(product => product.id === productId); 
//         // if(!product) return null;
//         // return product;

const { reviews } = require("../db");

//         // refactoring
//         const { id } = args;
//         return products.find((product) => product.id === id);
//     }, 
//     categories: (parent, args, context) => categories, 
//     category: (parent, args, context) => {
//         const { id } = args;
//         return categories.find((category) => category.id === id);
//     }
// }


//////////////////////////////// Destructing which is a better way to write the code /////////////////////////////
exports.Query = {
    hello: () => "Hello", 
    // products: (parent, args, {products}) => products, 
    products: (parent, {filter}, {products}) => {
        // let filteredProducts = products;
        // if(filter) {
        //     if(filter.onSale === true){
        //         filteredProducts = filteredProducts.filter((product) => {
        //             return product.onSale
        //         });
        //     }
        // }
        
        // return filteredProducts;

        let filteredProducts = products;
        const {onSale, avgRating} = filter;
        if(filter) {
            if(onSale === true){
                filteredProducts = filteredProducts.filter((product) => {
                    return product.onSale
                });
            }
        }

        if([1,2,3,4,5].includes(avgRating)){
            filteredProducts = filteredProducts.filter((product) => {
                let sumRating = 0;
                reviews.forEach((review) => {
                    if(review.productId === product.id) sumRating += review.rating; 
                })
            });
        }
        
        return filteredProducts;
    }, 
    product: (parent, { id }, {products}) => {
        return products.find((product) => product.id === id);
    }, 
    
    categories: (parent, args, { categories }) => categories, 
    category: (parent, {id}, { categories }) => {
        return categories.find((category) => category.id === id);
    }
}