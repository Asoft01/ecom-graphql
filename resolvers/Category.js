// const { products } = require("../db"); 

// exports.Category = {
//     products: (parent, args, context) => {
//         // console.log(parent); 
//         // using destructuring 
        
//         // const { id } = parent
//         // return products.filter((product) => product.categoryId === id);
//         const categoryId = parent.id;
//         return products.filter((product) => product.categoryId === categoryId);
//     } 
// };


///////////////////////////// Better Approach to write it /////////////////////////////////
exports.Category = {
    // products: ({id : categoryId}, args, {products}) => {
    //     return products.filter((product) => product.categoryId === categoryId);
    // }

    products: ({id : categoryId}, {filter}, {products}) => {
        const categoryProducts = products.filter((product) => product.categoryId === categoryId);
        let filteredCategoryProducts = categoryProducts; 
        if(filter) {
            if (filter.onSale === true) {
                filteredCategoryProducts = filteredCategoryProducts.filter((product) => {
                    return product.onSale; 
                })
            }
        }
        return filteredCategoryProducts; 
    }
}