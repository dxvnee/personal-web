'use server';

import { registerSchema } from "./auth.validation";
import { registerUser } from "./auth.service";
import { RegisterState } from "./auth.types";

export const registerAction = async (_prevState: any, formData: FormData): Promise<RegisterState> => {
    try{
        const data = registerSchema.parse({
            name: formData.get("name"),
            email: formData.get("email"),
            password: formData.get("password")
        })

        await registerUser(data);

        return {
            success: true,
            message: 'Registrasi berhasil',
        }
    } catch (error: any) {
        return {
            success: false,
            message: error.message,
        }
    }
}