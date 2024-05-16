import prisma from "../../helpers/prisma-client";


export async function createUser(data){
    const post  = await prisma.post.create({
        data:data,
    });
    return post;
};