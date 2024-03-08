// import {selectionHelper} from '@/graphql/v1/helpers';
// import {Context} from '@/graphql/v1';
// import {NotFoundError} from '@/src/errors';

// const updateBookcase = async (
//   parent: any,
//   args: any,
//   context: Context,
//   info: any,
// ) => {
//   const {id, name} = args;

//   const selection = selectionHelper.extract(info.fieldNodes[0].selectionSet);

//   const bookcase = await context.prisma.bookcase.update({
//     where: {id},
//     data: {
//       name,
//       updatedAt: new Date().toISOString(),
//       updatedByUserId: context.userId,
//     },
//     select: {
//       ...selection,
//     },
//   });

//   if (!bookcase) {
//     throw new NotFoundError('Bookcase not found');
//   }

//   return bookcase;
// };

// export default updateBookcase;
