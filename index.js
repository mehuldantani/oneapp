const express =  require('express');
const format = require('date-format');

const app = express();

const PORT = 4000 || process.env.PORT;

app.get("/",(req,res)=>{
    res.status(200).send("<h1>Hello From Mehul Dantani</h1>")
});

app.get("/api/v1/instagram",(res,resp)=>{
    const instajason = {
        username : "mehuldantani97",
        followers : 235,
        following : 432,
        date : format.asString("dd-MM-yyyy hh:mm:ss",new Date()),
    };

    resp.status(200).json(instajason)

});

app.get("/api/v1/facebook",(res,resp)=>{
    const instajason = {
        username : "mehuldantani97@meditab.com",
        followers : 1500,
        following : 10,
        date :format.asString("dd-MM-yyyy hh:mm:ss",new Date()),
    };

    resp.status(200).json(instajason)

});

app.get("/api/v1/linkedin",(res,resp)=>{
    const instajason = {
        username : "mehullinkedin@meditab.com",
        followers : 1000,
        following : 250,
        date : format.asString("dd-MM-yyyy hh:mm:ss",new Date()),
    };

    resp.status(200).json(instajason)

});

app.get("/api/v1/:token",(req,resp)=>{
    console.log(req.params.token);
    resp.status(200).json({parameter: req.params.token});
});

app.listen(PORT, () => {
    console.log('Server is running at $('+PORT+')');
});