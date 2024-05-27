// const { categories } = require("../db");
// exports.Product = {
//     category: (parent, args, context) => {
//       // console.log(context); 
//       // const { sayHello } = context;
//       // sayHello(); 

const { reviews } = require("../db");

//       const categories = context.categories
//       const categoryId = parent.categoryId; 
//       return categories.find((category) => category.id === categoryId);
//     }
// }

// Better Way to write it 
exports.Product = {
  category: ({categoryId}, args, {categories}) => {
  return categories.find((category) => category.id === categoryId);
},
// the id is the parent id which is id of the product in this case
  reviews: ({ id }, args, { reviews }) => {
    return reviews.filter((review)  => review.productId === id);
  }
}