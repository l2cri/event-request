import {email, helpers, required} from "@vuelidate/validators"

export default {
    email: {
        required: helpers.withMessage('Пожалуйста, введите Email', required),
        email: helpers.withMessage('Введите правильный Email', email),
    },
    password: {
        required: helpers.withMessage('Пожалуйста, введите Пароль', required),
    },
}