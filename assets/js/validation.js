export const emailValidation = (email) =>{
    const validateEmail = '/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/'
    return validateEmail.test(email)   
}

export const passwordvalidate = (password) =>{
    return password.length >= 8
}