const { MongoConnection } = require("../lib/Mongo")
var ObjectId = require("mongodb").ObjectID;

const COLLECTIONS = "students";

const findStudents = (id) => new Promise(async (resolve, reject) => {
    try {
        const DB = await MongoConnection()
        const students = DB.collection(COLLECTIONS)
        const studentList = await students.find({}).toArray()
        if(id != undefined){
            var filterResult = studentList.filter((slt) => slt._id == id);
            resolve(filterResult);
        }
        resolve(studentList)
    } catch (error) {
        reject(error)
    }

})

const createStudents = (primer_nombre, segundo_nombre, primer_apellido,segundo_apellido,carrera,nivel) => new Promise(async (resolve, reject) => {
    try {

        const DB = await MongoConnection();
        const rol = DB.collection(COLLECTIONS);

        const result = await rol.insertOne({
            primer_nombre: primer_nombre,
            segundo_nombre: segundo_nombre,
            primer_apellido: primer_apellido,
            segundo_apellido: segundo_apellido,
            carrera: carrera,
            nivel: nivel,
        });
        resolve(result);


    } catch (error) {
        reject(error);
    }
});

const updateStudent = (id,primer_nombre, segundo_nombre, primer_apellido,segundo_apellido,carrera,nivel) => new Promise(async (resolve, reject) => {
    try {
        const DB = await MongoConnection();
        const student = DB.collection(COLLECTIONS);            

            const result = await student.updateOne(
                { "_id": ObjectId(id) },
                {
                    $set: {
                        primer_nombre: primer_nombre,
                        segundo_nombre: segundo_nombre,
                        primer_apellido: primer_apellido,
                        segundo_apellido: segundo_apellido,
                        carrera: carrera,
                        nivel: nivel,
                    }
                }
            )
            resolve(result);
        
    } catch (error) {
        reject(error)
    }
});

const deleteStudent = (id) => new Promise(async (resolve, reject) => {
    try {
        const DB = await MongoConnection();
        const student = DB.collection(COLLECTIONS);
        const result = await student.deleteOne(
            { "_id": ObjectId(id) },
        )
        resolve(result);
    } catch (error) {
        reject(error)
    }
});

module.exports = {
    findStudents,createStudents,updateStudent,deleteStudent,
}