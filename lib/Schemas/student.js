const joi = require("joi")

const VCreateStudent = joi.object({
    primer_nombre: joi.string().min(2).max(50).empty().required(),
    primer_apellido: joi.string().min(2).max(50).empty().required(),
    segundo_nombre: joi.string().min(2).max(50).empty().required(),
    segundo_apellido: joi.string().min(2).max(50).empty().required(),
    carrera: joi.string().min(2).max(30).empty().required(),
    nivel: joi.string().min(2).max(30).empty().required(),
})

const VUpdateStudent = joi.object({
    id: joi.required(),
    primer_nombre: joi.string().min(2).max(50).empty().required(),
    primer_apellido: joi.string().min(2).max(50).empty().required(),
    segundo_nombre: joi.string().min(2).max(50).empty().required(),
    segundo_apellido: joi.string().min(2).max(50).empty().required(),
    carrera: joi.string().min(2).max(30).empty().required(),
    nivel: joi.string().min(2).max(30).empty().required(),
})

const VDeleteStudent = joi.object({
    id: joi.required(),
});

module.exports = {
    VCreateStudent,VUpdateStudent,VDeleteStudent,
}