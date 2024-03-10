const TodoListModel = require("../models/TodoListModel");
const ProfileModel = require("../models/ProfileModel");
exports.CreateTodo=(req,res)=>{
    let reqBody=req.body;
    let TodoSubject=reqBody['TodoSubject']
    let TodoDescription=reqBody['TodoDescription']
    let UserName = req.headers['username'];
    let TodoStatus="New"
    let TodoCreateDate=Date.now();
    let TodoUpdateDate=Date.now();
    let PostBody={
        UserName: UserName,
        TodoSubject: TodoSubject,
        TodoDescription: TodoDescription,
        TodoStatus: TodoStatus,
        TodoCreateDate:TodoCreateDate,
        TodoUpdateDate: TodoUpdateDate
    }

    TodoListModel.create(PostBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}


exports.SelectTodo=(req,res)=> {

    let UserName=req.headers['username']
    TodoListModel.find({UserName: UserName}, (err, data) => {
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}



exports.UpdateTodo=(req,res)=> {
    let reqBody = req.body;
    let TodoSubject = reqBody['TodoSubject']
    let TodoDescription = reqBody['TodoDescription']
    let _id = reqBody['_id']
    let TodoUpdateDate = Date.now();
    let PostBody = {
        TodoSubject: TodoSubject,
        TodoDescription: TodoDescription,
        TodoUpdateDate: TodoUpdateDate
    }

    TodoListModel.updateOne({_id: _id}, {$set: reqBody}, {upsert: true}, (err, data) => {
        if (err) {
            return res.status(400).json({status: "fail", error: err});
        } else {
            return res.status(200).json({status: "success", data: data});
        }
    })
}


exports.DeleteTodo = (req, res) => {
    let { _id } = req.body;

    TodoListModel.deleteOne({ _id: _id }, (err, data) => {
        if (err) {
            return res.status(400).json({ status: "fail", error: err });
        } else {
            return res.status(200).json({ status: "success", data: data });
        }
    });
};


exports.UpdateStatusTodo=(req,res)=> {
    let reqBody = req.body;
    let TodoStatus = reqBody['TodoStatus']
    let _id = reqBody['_id']
    let TodoUpdateDate = Date.now();
    let PostBody = {
       TodoStatus:TodoStatus,
        TodoUpdateDate: TodoUpdateDate
    }

    TodoListModel.updateOne({_id: _id}, {$set: reqBody}, {upsert: true}, (err, data) => {
        if (err) {
            return res.status(400).json({status: "fail", error: err});
        } else {
            return res.status(200).json({status: "success", data: data});
        }
    })
}
