const express=require('express');
const ProfileController=require('../controllers/ProfileController');
const TodoListController=require('../controllers/TodoListController');
const AuthVerifyMiddleware=require('../middlewares/AuthVerifyController');
const router=express.Router();

router.post("/CreateProfile",ProfileController.CreateProfile);
router.post("/UserLogin",ProfileController.UserLogin);
router.get("/SelectProfile",AuthVerifyMiddleware,ProfileController.SelectProfile);
router.post("/UpdateProfile",AuthVerifyMiddleware,ProfileController.UpdateProfile);
router.post("/CreateTodo",AuthVerifyMiddleware,TodoListController.CreateTodo);
router.post("/SelectTodo",AuthVerifyMiddleware,TodoListController.SelectTodo);
router.post("/UpdateTodo",AuthVerifyMiddleware,TodoListController.UpdateTodo);
router.post("/DeleteTodo",AuthVerifyMiddleware,TodoListController.DeleteTodo);
router.post("/UpdateStatusTodo",AuthVerifyMiddleware,TodoListController.UpdateStatusTodo);
module.exports=router;