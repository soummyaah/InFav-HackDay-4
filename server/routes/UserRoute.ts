import express from "express"
import { Persona } from "../../types/Persona"

const router = express.Router()
const authRouter = express.Router()

const AuthMiddleware = authRouter.use("/", (req,res,next) => {
    // create/load user into DB
    const user_token = req
})

/**
 * gets all users
 */
router.get("/", (req, res, next) => {

})

/**
 * get user by id
 */
router.get("/:id", (req, res, next) => {
    const { id } = req.params
})

/**
 * creates a user
 */
router.post("/", (req, res, next) => {
    const userProfile = <Persona>req.body.userProfile
})

/**
 * generate a persona
 */
router.post("/:id/persona", (req, res, next) => {

})
