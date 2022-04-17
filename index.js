//get express app
const express =  require('express');
//get date format
const format = require('date-format');

//define express
const app = express();

//swagger api document relateds
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

//for swagger api documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//define port
const PORT = process.env.PORT || 4000;

//home page of the application
app.get("/",(req,res)=>{
    res.status(200).send("<h1>Hello From Mehul Dantani</h1>")
});

//instagram route
app.get("/api/v1/instagram",(res,resp)=>{
    const instajason = {
        username : "mehuldantani97",
        followers : 235,
        following : 432,
        date : format.asString("dd-MM-yyyy hh:mm:ss",new Date()),
    };

    resp.status(200).json(instajason)

});

//facebook route
app.get("/api/v1/facebook",(res,resp)=>{
    const instajason = {
        username : "mehuldantani97@meditab.com",
        followers : 1500,
        following : 10,
        date :format.asString("dd-MM-yyyy hh:mm:ss",new Date()),
    };

    resp.status(200).json(instajason)

});

//linkedin route
app.get("/api/v1/linkedin",(res,resp)=>{
    const instajason = {
        username : "mehullinkedin@meditab.com",
        followers : 1000,
        following : 250,
        date : format.asString("dd-MM-yyyy hh:mm:ss",new Date()),
    };

    resp.status(200).json(instajason)

});

//else route
app.get("/api/v1/:token",(req,resp)=>{
    console.log(req.params.token);
    resp.status(200).json({parameter: req.params.token});
});

//start application listening to defined port
app.listen(PORT, () => {
    console.log('Server is running at $('+PORT+')');
});