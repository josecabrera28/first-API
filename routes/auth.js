
const express = require ("express");
const router = express.Router();
const { validatorRegister, validatorLogin} = require ('../validators/auth');
const { registerController, loginController } = require ('../controllers/auth');
//here all routes are in http://localhost:3001/api/auth

/**
 * http://localhost:3001/api
 * 
 * Route for registering new user
 * @openapi
 * /auth/register:
 *      post:
 *          tags:
 *              - auth
 *          summary: "register new user"
 *          description: "This route is to register a new user"
 *          requestBody:
 *              content:
*                      application/json:
*                                  schema:
*                                      $ref:  "#/components/schemas/authRegister"
 *          responses:
 *                  '201':
 *                      description: "User registered successfully"
 *                  '403':
 *                      description: "Error validating user"
 */
router.post('/register',validatorRegister, registerController);

/**
 * Login user
 * @openapi
 * /auth/login:
 *    post:
 *      tags:
 *        - auth
 *      summary: "Login user"
 *      description: user login and jwt token
 *      responses:
 *        '200':
 *          description: returns object retrieved.
 *        '422':
 *          description: Validation Error.
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                 $ref: "#/components/schemas/authLogin"
 *    responses:
 *      '201':
 *        description: returns object retrieved with response state '201'
 *      '403':
 *        description: user does not have permissions with response state '403'
 */
router.post('/login',validatorLogin, loginController);

module.exports=router;