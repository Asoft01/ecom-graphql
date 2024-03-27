const { products } = require("../db"); 

exports.Category = {
    products: (parent, args, context) => {
        // console.log(parent); 
        // using destructuring 
        
        // const { id } = parent
        // return products.filter((product) => product.categoryId === id);
        const categoryId = parent.id;
        return products.filter((product) => product.categoryId === categoryId);
    } 
};