const express = require('express')
const BlockController = require('../controllers/BlockController')
const FrontController = require('../controllers/FrontController')
const admincontroller = require('../controllers/admin/admincontroller')
const blogcontroller = require('../controllers/admin/blogcontroller')
const categorycontroller = require('../controllers/admin/categorycontroller')
const CurdController = require('../controllers/CurdController')
const ContactController = require('../controllers/admin/ContactController')
const aboutcontroller = require('../controllers/admin/aboutcontroller')
const UserController = require('../controllers/user/UserController')
// const aboutmiddleware = require('../middleware/aboutmiddleware')
const image_middleware = require('../middleware/image_middleware')

const router = express.Router()    // METHOD CREATE
// router.get('/',FrontController.home)   // ROUTE CREATE

router.get('/',BlockController.home)    // BLOCK CONTROLLER ROUTE
router.get('/about',BlockController.about)    // BLOCK ABOUT ROUTE
router.get('/contact',BlockController.contact)    // BLOCK CONTACT ROUTE
router.get('/blog',BlockController.blog)         // BLOCK LOGIN ROUTE
router.get('/login',BlockController.login)         // BLOCK LOGIN ROUTE
router.get('/detail/:id',BlockController.detail)  // BLOCK DETAIL ROUTE

router.get('/admin/dashboard',admincontroller.dashboard)      //      ADMIN CONTROLLER 

router.get('/admin/createblog',blogcontroller.createblog)       //      ADMIN CREATE BLOG CONTROLLER
router.post('/admin/bloginsert',image_middleware,blogcontroller.bloginsert)      //      ADMIN INSERT BLOG CONTROLLER
router.get('/admin/displayblog',blogcontroller.displayblog)     //      ADMIN DISPLAY BLOG CONTROLLER
router.get('/admin/viewblog/:id',blogcontroller.viewblog)        //      ADMIN VIEW BLOG CONTROLLER
router.get('/admin/editblog/:id',blogcontroller.editblog)         //      ADMIN EDIT BLOG CONTROLLER
router.post('/admin/blogupdate/:id',blogcontroller.updateblog)   
router.get('/admin/deleteblog/:id',blogcontroller.deleteblog)


router.get('/admin/createcategory',categorycontroller.createcategory) 
router.post('/admin/categoryinsert',categorycontroller.categoryinsert)     //    ADMIN CREATE CATEGORY CONTROLLER
router.get('/admin/displaycategory',categorycontroller.categorydisplay) 
router.get('/viewcategory/:id',categorycontroller.categoryview)    
router.get('/editcategory/:id',categorycontroller.categoryedit)       
router.post('/updatecategory/:id',categorycontroller.categoryupdate)   
router.get('/deletecategory/:id',categorycontroller.categorydelete)
     

router.get('/curd/create',CurdController.createform)          // CURD CONTROLLER
router.post('/curd/insert',CurdController.Insertdata)
router.get('/curd/display',CurdController.DisplayCurd)
router.get('/curd/view/:id',CurdController.viewdata)

router.post('/admin/contactinsert',ContactController.contactinsert)    //ADMIN CONTACT CONTROLLER
router.get('/admin/displaycontact',ContactController.contactdisplay)

router.get('/admin/aboutcreate',aboutcontroller.aboutcreate)

// router.get('/about', (req,res) =>{
//     res.send('ABOUT PAGE')
// })
//user controller
router.get('/register',UserController.register)
router.post('/registerinsert',UserController.registerinsert)         //USER CONTROLLER 
router.post('/verifylogin',UserController.verifylogin)

router.get('/logout',UserController.logout)                 //LOGOUT CONTROLLER

module.exports = router;