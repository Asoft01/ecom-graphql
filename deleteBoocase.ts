
// export default deleteBookcase;

// const deleteBookcase = async (parent: any, args: any, context: Context) => {
//   const { id } = args;

//   const userId = context.userId!;
//   const user = await context.prisma.user.findUnique({
//     where: {
//       id: userId
//     },
//     select: { roles: { include: { role: true } } }
//   });

//   console.log("Name of user", user?.roles[0].role.name);
//   const role = user?.roles[0].role.name;
//   if (role === "Pack Manager" || role === "Global Administrator") {
//     // Check if the bookcase exists
//     const existingBookcase = await context.prisma.bookcase.findUnique({
//       where: { id },
//       include: { bookshelves: true } // Include the related bookshelf
//     });

//     if (!existingBookcase) {
//       throw new NotFoundError('Bookcase not found');
//     }

//     // Delete the associated bookshelf if it exists
//     if (existingBookcase.bookshelves) {
//       await context.prisma.bookshelf.delete({
//         where: { id: existingBookcase.bookshelves.id }
//       });
//     }

//     // Now delete the bookcase
//     const deletedBookcase = await context.prisma.bookcase.delete({
//       where: { id },
//     });

//     return deletedBookcase.id;
//   } else {
//     throw new NotFoundError('You are not permitted to make this request');
//   }
// };