const isLoginValidation = (response) => {
    if (response.message) {
        return [true, response.message]
    }
    return [false, response]
}

export { isLoginValidation }