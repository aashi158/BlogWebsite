const StudentModel = require('../models/Student.js')
// const CategoryModel = require('../models/Category')

class CurdController {
     static createform = async (req, res) => {
          res.render('curd/create');
     }

     static Insertdata = async (req, res) => {

          console.log(req.body)
          try {
               const { name, email } = req.body
               const result = new StudentModel({
                    name: name,
                    email: email
               })
               //saving data
               await result.save()
               res.redirect('/curd/create')//route ka url jispe apko pahuchna hai uska redirectory me dete hai    
          } catch (err) {
               console.log(err)
          }
     }

     static DisplayCurd = async (req, res) => {
          try {
               const result = await StudentModel.find()
               // console.log(result)
               res.render('curd/display', { data: result })

          } catch (err) {
               console.log(err)
          }
     }

     static viewdata = async (req, res) => {
          console.log(req.params.id)
          try {
               const result = await StudentModel.findById(req.params.id)
               // console.log(result)
               res.render('curd/view', { data: result })

          } catch (err) {
               console.log(err)
          }
     }

}

module.exports = CurdController;