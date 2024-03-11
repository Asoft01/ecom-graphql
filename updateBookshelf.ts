// import {selectionHelper} from '@/graphql/v1/helpers';
// import {Context} from '@/graphql/v1';
// import {NotFoundError} from '@/src/errors';

// const updateBookshelf = async (
//   parent: any,
//   args: any,
//   context: Context,
//   info: any,
// ) => {
//   const {id, data} = args;

//   const userId = context.userId!;
//   const user = await context.prisma.user.findUnique({
//     where: {
//       id: userId
//     },
//     select: { roles: { include: { role: true } } }
//   });

//   console.log("Name of user",user?.roles[0].role.name);
//   const role = user?.roles[0].role.name;

//   const selection = selectionHelper.extract(info.fieldNodes[0].selectionSet);
//   if (role === "Pack Manager" || role === "Global Administrator") {
  
//     const bookshelf = await context.prisma.bookshelf.update({
//       where: {id},
//       data: {
//         ...data,
//         updatedAt: new Date().toISOString(),
//         updatedByUserId: context.userId,
//       },
//       select: {
//         ...selection,
//       },
//     });

//     if (!bookshelf) {
//       throw new NotFoundError('Bookshelf not found');
//     }

//     return bookshelf;
//   }else{
//     throw new NotFoundError('You are not permitted to make this request');
//   }
// };

// export default updateBookshelf;
