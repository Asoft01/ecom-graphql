// import {Context} from '@/graphql/v1';
// import {selectionHelper, search} from '@/graphql/v1/helpers';

// const accessControlHandler = async(context: Context): Promise<boolean> => {
//   // return async (parent: any, args: any, context: Context, info: any) => {
    
//     // console.log("user control handler",userId); 
//     const id = context.userId!;
//     const user = await context.prisma.user.findUnique({
//       where: {
//         id
//       },
//       select: { roles: { include: { role: true } } }
//     });

//     // console.log("Name of user", user?.roles[0].role.name);
//     const role = user?.roles[0].role.name;

//     if (role === "Pack Manager" || role === "Global Administrator") {
//       return true;
//     }else{
//       return false;
//     }
//   }
// // };

// export default accessControlHandler;

