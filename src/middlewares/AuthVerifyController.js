/*var jwt = require('jsonwebtoken');

module.exports=(req,res,next)=>{
    let token=req.headers['token-key']

    jwt.verify(token,'SecretKey123',function (err,decoded) {
        if (err) {
            res.status(401).json({status: "unauthorized"});
        } else {
             //get username from decoded token & add with req header
            let username=decoded['data']['UserName']
            req.headers.username=username;
            next();
        }
    })

}*/
var jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    let token = req.headers['token-key'];

    jwt.verify(token, 'SecretKey123', function (err, decoded) {
        if (err) {
            res.status(401).json({ status: "unauthorized" });
        } else {
            //get username from decoded token & add with req header
            let username = decoded['UserName'];
            req.headers.username = username;
            next();
        }
    });
};
