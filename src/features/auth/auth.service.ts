import { findUserByEmail, createUser } from "./auth.repo";
import { hashPassword  } from "@/lib/hash";
import type { RegisterInput } from "./auth.validation";

export const registerUser = async (input: RegisterInput) => {
    const existingUser = await findUserByEmail(input.email);
    if (existingUser) {
        throw new Error("User with this email already exists");
    }

    const hashedPassord = await hashPassword(input.password);
    return createUser(input.name, input.email, hashedPassord);
}