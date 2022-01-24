import { object, string, ref } from 'yup';

const commonValidation = {
    email: string().email().required(),
    password: string().required().min(3)
}

export const signUpValidation = object().shape({
    name: string().required(),
    confirm: string().equals([ref('password')], 'مغایرتتتتت'), ...commonValidation
})

export const signInValidation = object().shape(commonValidation)