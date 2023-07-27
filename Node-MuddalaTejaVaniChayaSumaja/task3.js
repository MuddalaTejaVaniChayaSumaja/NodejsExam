
var nodemailer=require('nodemailer');
var transporter=nodemailer.createTransport({
    service:'gmail',
    author:{
        user:"mteja8820@gmail.com",
        password:""
    }
});
var mailoptions={
    from:"mteja8820@gmail.com",
    to:"pravin.consensus@gmail.com",
    subject:"20A21A05C7 sending u mail from node js",
    text:"My reg.no is 20A21A05C7 ... Iam sending this mail using node js"
};
transporter.sendMail(mailoptions,function(err,info){
    if(err){
        console.log(err);
    }
    else{
        console.log('Email sent:'+info.response);
    }
})