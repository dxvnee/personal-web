import { prisma } from '@/lib/prisma';

export const findUserByEmail = async (email: String) => {
    return prisma.user.findUnique({
        where: { email }
    })
}

export const createUser = async (name: String, email: String, password: String) => {
    return prisma.user.create({
        data: { name, email, password },
    })
}


