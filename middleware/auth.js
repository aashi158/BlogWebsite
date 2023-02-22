const UserModel = require('../models/User')
const jwt = require('jsonwebtoken');

const CheckUserAuth = async (req, res, next) => {
             
     try {
          const token = req.cookies.jwt;  //cookies get on browser              //data store

          if (!token) {
               res.redirect('/')
          } else {
               console.log(token)
               const verifyuser = jwt.verify(token, 'aashigwl') //secret key
               console.log(verifyuser)
               const user = await UserModel.findOne({ _id:verifyuser.userid})
               req.user = user
               console.log(user)
               next();


          }
     } catch (err) {
          console.log(err)
     }
}
module.exports = CheckUserAuth