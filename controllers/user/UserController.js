const UserModel = require('../../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

class UserController {
    static register = async (req, res) => {
        res.render("user/register", { message: req.flash("error") });
      }
    static registerinsert = async (req, res) => {
        //console.log(req.body)
        const { username, email, password, confirm_password } = req.body;
        const user = await UserModel.findOne({ email: email }); // pehle se email ka data agar hogga toh register per chale
        //console.log(user)
        if (user) {
          req.flash("error", "THIS EMAIL IS ALREADY REGISTERED");
          return res.redirect("/register");
        } else {
          if (username && email && password && confirm_password) {
            if (password === confirm_password) {
              try {
                const salt = await bcrypt.genSalt(10);
                const hashpassword = await bcrypt.hash(password, salt);
                const result = new UserModel({
                  username: username,
                  email: email,
                  password: hashpassword,
                });
                await result.save();
                req.flash("error", "REGISTRATION SUCCESSFULLY");
                return res.redirect("/login");
              } catch (err) {
                console.log(err);
              }
            } else {
              req.flash("error", "PASSWORD AND CONFIRM PASSWORD DOES NOT MATCH");
              return res.redirect("/register");
            }
          } else {
            req.flash("error", "ALL FIELDS ARE REQUIRED");
            return res.redirect("/register");
          }
        }
      }
    static verifylogin = async (req,res) => {
        // console.log(req.body)
        try {
          const { email, password } = req.body;
          const user = await UserModel.findOne({ email: email });
          console.log(user)
    
          if (user != null) 
          {
            const isMatch = await bcrypt.compare(password, user.password); //check bycript password to user enter password
    
                if ((user.email == email) && isMatch) 
                {
                  //GENERATE TOKEN 
                  const token = jwt.sign({ userid: user._id }, 'aashigwl');
                  // console.log(token)
                  res.cookie('jwt',token)
                 
                 res.redirect('/admin/dashboard')
                  // if(user.role == 'student')
                  // {
                  //   return res.redirect("/admin/home")
                  // }
                  // else if (user.role == 'admin')
                  // {
                  // // return res.redirect("/admin/dashboard");

                  //   return res.render('admin/dashboard')                   
                  // } 
              }
                else 
                 {
                  req.flash("error", "EMAIL AND PASSWORD DOES NOT MATCH");
                  return res.redirect("/register");
              }    
          } 
          else 
          {
            req.flash("error", "** YOU ARE NOT A REGISTERED USER");
            return res.redirect("/login");
          }
        } catch (err) {
          console.log(err);
        }
        
      }
    static logout = async(req,res) => {
        try{
          res.clearCookie('jwt')
          res.redirect('/')
    
        }catch(err)
        {
          console.log(err)
        }
        
      }

}
module.exports = UserController