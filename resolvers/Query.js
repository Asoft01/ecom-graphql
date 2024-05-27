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
    products: (parent, args, {products}) => products, 
    product: (parent, { id }, {products}) => {
        return products.find((product) => product.id === id);
    }, 
    categories: (parent, args, { categories }) => categories, 
    category: (parent, {id}, { categories }) => {
        return categories.find((category) => category.id === id);
    }
}