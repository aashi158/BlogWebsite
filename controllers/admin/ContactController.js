const ContactModel =require('../../models/Contact')
class ContactController{

    static contactinsert = async(req,res) =>{
        //console.log('INSERTED DATA') 
        //console.log(req.body) 
        // console.log(req.body.name) 
        try{
            const{name,email,phone,message} = req.body
            const result = new ContactModel({
                name:name,
                email:email,
                phone:phone,
                message:message  
            })
            // Saving data
            await result.save()
            res.redirect('/contact')  // route url
        }catch(err){
            console.log(err)
        }
    }
    static contactdisplay = async(req,res) =>{ 
        try{
            const result = await ContactModel.find()
            console.log(result)
            res.render('admin/contact/displaycontact',{data:result})    // data display on page   
        }catch(err){
            console.log(err)
        }
    }
}

 
 
 module.exports = ContactController