const Joi = require('joi');
// const {validate} = require('react-joi-validation');
// const {passwordComplexity} =require('joi-password-complexity');
const passwordComplexity = require('joi-password-complexity');
// import Joi from 'joi';
// import passwordComplexity from 'joi-password-complexity'

const signupbodyValidation = (body)=>{
    console.log('inside id');
    const schema = Joi.object({
        username:Joi.string().required().label('User Name'),
        email:Joi.string().required().label('Email'),
        password:passwordComplexity().required().label('Password'),
        userid:Joi.number().required().label('User ID'),
    })
    return schema.validate(body);
}

const loginbodyValidation= (body)=>{
    console.log(body);
    const schema = Joi.object({
        username:Joi.string().required().label('User Name'),
        password:passwordComplexity().required().label('Password'),
    })
    return schema.validate(body);
}


module.exports = {signupbodyValidation,loginbodyValidation};    