//basic lib import
const express=require('express');
const router=require ('./src/routes/api');
const app=new express();
const bodyParser=require('body-parser');

const mongoSanitize=require('express-mongo-sanitize');
const rateLimit=require('express-rate-limit');
const helmet=require('helmet');
const hpp=require('hpp');
const cors=require('cors');


//database lib import
const mongoose=require('mongoose');


//cors open
app.use(cors());

//security implementation
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());
app.use(express.json({limit:'20mb'}));
app.use(express.urlencoded({extended:true}));

app.use(bodyParser.json());

const Limiter=rateLimit({windowMs:15*60*1000,max:3000});
app.use(Limiter);

//database connection(version 6-call back function(6.2.1))
let URl="mongodb://127.0.0.1:27017/Todo";
let OPTION={user:'',pass:'',autoIndex:true};
mongoose.connect(URl,OPTION,(error)=>{
    console.log("Connection Success")
    console.log(error)
})

/*database connection(version 8-async await)
const URL = "mongodb://127.0.0.1:27017/Todo";
const OPTIONS = {
  user: '', pass: '',
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(URL, OPTIONS)
  .then(() => {
    console.log("Connection Success");
  })
  .catch((error) => {
    console.error("Connection Error:", error);
  });
*/


//routing implement
app.use("/api/v1",router);

//undefined route implement
app.use("*",(req,res)=>{
    res.status(404).json({status:"fail",data:"Not Found"});
});

module.exports=app;