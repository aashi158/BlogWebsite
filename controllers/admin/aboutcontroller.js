const AboutModel = require('../../models/about')

class aboutcontroller {
     static aboutcreate = async (req, res) => {
          res.render('admin/about/createabout')
     }

     static aboutinsert = async (req, res) => {
          //console.log('INSERT DATA')
          //console.log(req.body)
          //console.log(req.body.name)

          try {
               const { title, description } = req.body
               const result = new AboutModel({
                    title: title,
                    description: description

               })
               //saving data
               await result.save()
               res.redirect('/admin/createabout')   //route url
          } catch (err) {
               console.log(err)
          }
     }


}
module.exports = aboutcontroller