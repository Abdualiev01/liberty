export const vPhoneNumber=(phoneNumber) =>{
    const regex=/(\+992\d{9}|\d{9})/
    return regex.test(phoneNumber)
}


export const validateName = (name) => name.length>2

export const validateText = (name) => name.length>5
