// import { selectionHelper } from '@/graphql/v1/helpers';
// import { Context } from '@/graphql/v1';
// import { NotFoundError } from '@/src/errors';

// const addBookcase = async (
//   parent: any,
//   args: any,
//   context: Context,
//   info: any,
// ) => {
//   const { companyId, data } = args;
//   console.log("user2", context.userId);
//   const id = context.userId!;
//   const user = await context.prisma.user.findUnique({
//     where: {
//       id
//     },
//     select: { roles: { include: { role: true } } }
//   });

//   console.log("Name of user", user?.roles[0].role.name);
//   const role = user?.roles[0].role.name;

//   const selection = selectionHelper.extract(info.fieldNodes[0].selectionSet);
//   if (role === "Pack Manager" || role === "Global Administrator") {
//     const bookcase = await context.prisma.bookcase.create({
//       data: {
//         ...data,
//         createdAt: new Date().toISOString(),
//         createdByUserId: context.userId,
//         companyId,
//       },
//       select: {
//         ...selection,
//       },
//     });

//     return bookcase;
//   } else {
//     throw new NotFoundError('You are not permitted to make this request');
//   }
// };

// export default addBookcase;
