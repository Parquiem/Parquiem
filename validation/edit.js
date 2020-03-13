const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function(data) {
    let errors = {};
    //Convierte los campos vacios en cadenas vacias para usar las funciones de validacion
    data.name = !isEmpty(data.name) ? data.name : "";
//    data.email = !isEmpty(data.email) ? data.email :  "";
    data.phoneNumber = !isEmpty(data.phoneNumber) ? data.phoneNumber : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";

    //Validacion de nombres
    if (Validator.isEmpty(data.name)){
        errors.name = "Name required";
    }
    //Validacion de email
    // if(Validator.isEmpty(data.email)){
    //     errors.email = "Email required";
    // } else if (!Validator.isEmail(data.email)) {
    //     errors.email = "Invalid Email";
    // }
    if (Validator.isEmpty(data.phoneNumber)) {
        errors.phoneNumber = "Phone number";
    } else if(Validator.isMobilePhone(data.phoneNumber)){
        errors.phoneNumber = "Invalid phone number";
    }
    //Validacion de password
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password is required";
    }if (Validator.isEmpty(data.password2)) {
        errors.password2 = "Confirm password is required";
    }if (!Validator.isLength(data.password, { min: 8, max: 64 })) {
        errors.password = "Password must be at least 8 characters";
    }if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Passwords must match";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};