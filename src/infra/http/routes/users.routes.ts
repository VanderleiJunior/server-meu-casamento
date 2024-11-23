import { Router } from "express";
import { createUserController } from "../controllers/CreateUserController";
import { loginUserController } from "../controllers/LoginUserController";
import { authMiddleware } from "../middlewares/authMiddleware";
import { getUserController } from "../controllers/GetUserController";
import { updateUserController } from "../controllers/UpdateUserController";

const router = Router();

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     basicAuth:
 *       type: http
 *       scheme: basic
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: User ID
 *           example: 1
 *         name:
 *           type: string
 *           description: User name
 *           example: "John Doe"
 *         password:
 *           type: string
 *           description: User password (hashed)
 *           example: "$2b$10$abcd12345securehashedpassword"
 *         email:
 *           type: string
 *           description: User email address
 *           example: "john.doe@example.com"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp of user creation
 *           example: "2024-11-22T10:15:30Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp of the last update
 *           example: "2024-11-22T10:20:00Z"
 *     UserInput:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: User name
 *           example: "John Doe"
 *         password:
 *           type: string
 *           description: User password (plain text, will be hashed)
 *           example: "securePassword123"
 *         email:
 *           type: string
 *           description: User email address
 *           example: "john.doe@example.com"
 *     LoginInput:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           description: User email address
 *           example: "john.doe@example.com"
 *         password:
 *           type: string
 *           description: User password
 *           example: "securePassword123"
 */

/**
 * @swagger
 * /users/v1/login:
 *   post:
 *     summary: Log in a user and get a JWT token
 *     tags:
 *       - Users
 *     security:
 *       - basicAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginInput'
 *     responses:
 *       200:
 *         description: User successfully logged in
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: JWT token for user authentication
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *       401:
 *         description: Invalid credentials
 */
router.post("/users/v1/login", (req, res) => {
  loginUserController(req, res);
});

/**
 * @swagger
 * /users/v1:
 *   get:
 *     summary: Retrieve a user's details
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: User ID to retrieve
 *     responses:
 *       200:
 *         description: User data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: User not found
 */
router.get("/users/v1", authMiddleware, (req, res) => {
  getUserController(req, res);
});

/**
 * @swagger
 * /users/v1:
 *   post:
 *     summary: Create a new user
 *     tags:
 *       - Users
 *     security:
 *       - basicAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserInput'
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       401:
 *         description: Unauthorized
 */
router.post("/users/v1", (req, res) => {
  createUserController(req, res);
});

/**
 * @swagger
 * /users/v1/{id}:
 *   put:
 *     summary: Update an existing user
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The user ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserInput'
 *     responses:
 *       200:
 *         description: User updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: User not found
 */
router.put("/users/v1/", (req, res) => {
  updateUserController(req, res);
});

/**
 * @swagger
 * /users/v1/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The user ID
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: User not found
 */
router.delete("/users/v1/:id", (req, res) => {
  console.log(`DELETE /users/v1/${req.params.id}`);
  res.status(200).send(`User with ID ${req.params.id} deleted`);
});

export default router;
