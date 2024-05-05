const { categories } = require("../db");
exports.Product = {
    category: (parent, args, context) => {
      // console.log(context); 
      const { sayHello } = context;
      sayHello(); 
      const categoryId = parent.categoryId; 
      return categories.find((category) => category.id === categoryId);
    }
}