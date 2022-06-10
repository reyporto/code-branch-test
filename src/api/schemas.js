const Joi = require('joi')

exports.bodyParse = Joi.object({
    code: Joi.string().required(),
})
