// import {Context} from '@/graphql/v1';
// import {NotFoundError} from '@/src/errors';

// const deleteBookshelf = async (parent: any, args: any, context: Context) => {
//   const {id} = args;

//   const userId = context.userId!;
//   const user = await context.prisma.user.findUnique({
//     where: {
//       id: userId
//     },
//     select: { roles: { include: { role: true } } }
//   });

//   console.log("Name of user",user?.roles[0].role.name);
//   const role = user?.roles[0].role.name;
//   if (role === "Pack Manager" || role === "Global Administrator") {
//     const bookshelf = await context.prisma.bookshelf.delete({
//       where: {id},
//     });

//     if (!bookshelf) {
//       throw new NotFoundError('Bookshelf not found');
//     }

//     return id;
//   }else{
//     throw new NotFoundError('You are not permitted to make this request');
//   }
// };

// export default deleteBookshelf;
