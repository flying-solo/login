import * as yup from 'yup';

export const clientSchema = yup.object().shape({
    name: yup.string().required(),
    // username: yup.string().lowercase().required(),
    emailId: yup.string().email().required(),
    password: yup.string().required()
});

