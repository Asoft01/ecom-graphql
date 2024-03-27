const { categories, products } = require("../db"); 
exports.Query = {
    hello: () => "Hello", 
    products: () => products, 
    product: (parent, args, context) => {
        // console.log(args);
        // const productId = args.id;
        // const product = products.find(product => product.id === productId); 
        // if(!product) return null;
        // return product;

        // refactoring
        const { id } = args;
        return products.find((product) => product.id === id);
    }, 
    categories: (parent, args, context) => categories, 
    category: (parent, args, context) => {
        const { id } = args;
        return categories.find((category) => category.id === id);
    }
}