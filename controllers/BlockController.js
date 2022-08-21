const BlogModel = require('../models/Blog')
const CategoryModel = require('../models/Category')
class BlockController {
    static home = async (req, res) => {
        try {
            const result = await BlogModel.find()
            console.log(result)
            res.render('home', { data: result })
        } catch (err) {
            console.log(err)
        }

    }
    static detail = async (req, res) => {
        console.log(req.params.id)
        try {
            const result = await BlogModel.findById(req.params.id)
            const cat = await CategoryModel.find()
            //console.log(result)
            res.render('detail', { data: result, catname: cat })

        } catch (err) {
            console.log(err)
        }

    }
    static about = (req, res) => {
        res.render('about')
    }
    static contact = (req, res) => {
        res.render('contact')
    }
    static blog = (req, res) => {
        res.render('blog')
    }
    static login = (req, res) => {
        res.render('login', { message: req.flash('error') })
    }
}

module.exports = BlockController