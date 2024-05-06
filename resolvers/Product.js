// const { categories } = require("../db");
// exports.Product = {
//     category: (parent, args, context) => {
//       // console.log(context); 
//       // const { sayHello } = context;
//       // sayHello(); 

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
}