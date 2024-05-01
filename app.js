//importing required pachages
const express =require("express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerExpress = require("swagger-ui-express");

const app =express();

//listen on localgst 5000
app.listen(5000,()=>console.log("listen on 5000"));
