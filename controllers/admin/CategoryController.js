const CategoryModel = require("../../models/Category")

class CategoryController {
    static createcategory = async (req, res) => {
        res.render('admin/category/createcategory')
    }
    static categoryinsert = async (req, res) => {
        // console.log('INSERTED DATA')
        // console.log(req.body)
        try {
            const { catname } = req.body
            const result = new CategoryModel({
                catname: catname,
            })
            // Saving data
            await result.save()
            res.redirect('createcategory')
        }
        catch (err) {
            console.log(err)
        }
    }

    static categorydisplay = async (req, res) => {
        try {
            const result = await CategoryModel.find()
            // console.log(result)
            res.render('admin/category/displaycategory', { data: result })
        }
        catch (err) {
            console.log(err)
        }
    }
    static categoryview = async (req, res) => {
        //console.log(req.params.id)
        try {
            const result = await CategoryModel.findById(req.params.id)
            console.log(result)
            res.render('admin/category/viewcategory', { data: result })
        } catch (err) {

            console.log(err)
        }
    }
    static categoryedit = async (req, res) => {
        //console.log(req.params.id)
        try {
            const result = await CategoryModel.findById(req.params.id)
            console.log(result)
            res.render('admin/category/editcategory', { data: result })
        } catch (err) {
            console.log(err)
        }
    }

    static categoryupdate = async (req, res) => {
        //console.log(req.params.id)
        console.log(req.body)
        try {
            const result = await CategoryModel.findByIdAndUpdate(req.params.id, req.body)
            console.log(result)
            res.redirect('/admin/displaycategory');
        }
        catch (err) {
            console.log(err)
        }
    }
    static categorydelete = async (req, res) => {
        // console.log(req.params.id)
        console.log(req.body)
        try {
            const result = await CategoryModel.findByIdAndDelete(req.params.id)
            console.log(result)
            res.redirect('/admin/displaycategory');  //data on edit page
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = CategoryController