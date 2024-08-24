import express from "express"
import { UserProfile } from "../../types/UserProfile"

const router = express.Router()
const authRouter = express.Router()

const AuthMiddleware = authRouter.use("/", (req,res,next) => {
    // create/load user into DB
    const userData = req.header()
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
    const userProfile = <UserProfile>req.body.userProfile
})

router.post("/:id/persona", (req, res, next) => {

})
