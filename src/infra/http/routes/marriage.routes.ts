import { Router } from "express";
import { createMarriageController } from "../controllers/CreateMarriageController";
import { updateMarriageController } from "../controllers/UpdateMarriageController";
import { getMarriageByUserController } from "../controllers/GetMarriageByUserController";
import { deleteMarriageController } from "../controllers/DeleteMarriageController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Marriage:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Marriage ID
 *           example: 1
 *         person1:
 *           type: string
 *           description: Name of the first person
 *           example: "John Doe"
 *         person2:
 *           type: string
 *           description: Name of the second person
 *           example: "Jane Doe"
 *         numberGuests:
 *           type: integer
 *           description: Number of guests
 *           example: 100
 *         party:
 *           type: string
 *           description: Indicates if there is a party ("Y" or "N")
 *           example: "Y"
 *         religious:
 *           type: string
 *           description: Indicates if the ceremony is religious ("Y" or "N")
 *           example: "N"
 *         honeyMoon:
 *           type: string
 *           description: Indicates if there is a honeymoon ("Y" or "N")
 *           example: "Y"
 *         season:
 *           type: string
 *           description: Season of the marriage
 *           example: "Summer"
 *         religion:
 *           type: string
 *           description: Religion of the ceremony (if religious)
 *           example: "Christian"
 *         city:
 *           type: string
 *           description: City where the marriage will take place
 *           example: "New York"
 *         style:
 *           type: string
 *           description: Style of the marriage
 *           example: "Formal"
 *         time:
 *           type: string
 *           description: Time of the ceremony
 *           example: "Evening"
 *         local:
 *           type: string
 *           description: Type of venue for the marriage
 *           example: "Banquet Hall"
 *         budget:
 *           type: number
 *           description: Budget for the marriage
 *           example: 20000
 *         userId:
 *           type: integer
 *           description: User ID associated with the marriage
 *           example: 1
 */

/**
 * @swagger
 * /marriages:
 *   post:
 *     summary: Create a new marriage
 *     tags:
 *       - Marriages
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Marriage'
 *     responses:
 *       201:
 *         description: Marriage created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Marriage'
 *       401:
 *         description: Unauthorized
 */
router.post("/marriages", authMiddleware, (req, res) => {
  createMarriageController(req, res);
});

/**
 * @swagger
 * /marriages/{id}:
 *   put:
 *     summary: Update an existing marriage
 *     tags:
 *       - Marriages
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The marriage ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Marriage'
 *     responses:
 *       200:
 *         description: Marriage updated successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Marriage not found
 */
router.put("/marriages/:id", authMiddleware, (req, res) => {
  updateMarriageController(req, res);
});

/**
 * @swagger
 * /marriages/user/{userId}:
 *   get:
 *     summary: Get all marriages for a user
 *     tags:
 *       - Marriages
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *         description: User ID to fetch marriages for
 *     responses:
 *       200:
 *         description: List of marriages retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Marriage'
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: User or marriages not found
 */
router.get("/marriages/user/:userId", authMiddleware, (req, res) => {
  getMarriageByUserController(req, res);
});

/**
 * @swagger
 * /marriages/{id}:
 *   delete:
 *     summary: Delete a marriage by ID
 *     tags:
 *       - Marriages
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The marriage ID
 *     responses:
 *       200:
 *         description: Marriage deleted successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Marriage not found
 */
router.delete("/marriages/:id", authMiddleware, (req, res) => {
  deleteMarriageController(req, res);
});

export default router;
