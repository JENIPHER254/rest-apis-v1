//importing required pachages
const express = require("express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const app = express();
//setting up swagger
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Library API",
      version: "1.0.0",
    }
  },
  apis: ["app.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
console.log(swaggerDocs);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));


/**
 * @swagger
 * /books:
 *   get:
 *     description: Get all books
 *     responses:
 *        200:
 *          description: Success
 * 
 */
app.get('/books', (req, res) => {
  res.send([
    {
      id: 1,
      title: "Rich Dad Poor Dad",
    },
    
  ])
});
/**
 * @swagger
 * /books:
 *   post:
 *     description: Post  book
 *     parameters:
 *     - name: title
 *       description: Title of the book
 *       in: formData
 *       required: true
 *       type: string   
 *     responses:
 *        201:
 *          description: Created
 * 
 */
app.post('/books', (req,res)=>{
    res.send(201).send()
})

//listen on localgst 5000
app.listen(5000, () => console.log("listen on 5000"));
