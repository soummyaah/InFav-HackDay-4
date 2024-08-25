import { Router } from "express"
import { Persona } from "../../types/Persona"
import { Strategy } from "../../types/Strategy"

const router = Router()

/**
 * get all personas for a user
 */
router.get("/", (req, res, next) => {

})

/**
 * get persona by id
 */
router.get("/:id", (req, res, next) => {
    const { id } = req.params
})

/**
 * creates a persona
 */
router.post("/", (req, res, next) => {
    const persona = <Persona>req.body.persona
})

/**
 * get persona by id
 */
router.patch("/:id", (req, res, next) => {
    const { id } = req.params
})

/**
 * delete persona by id
 */
router.delete("/:id", (req, res, next) => {
    const { id } = req.params
})

/**
 * upload a sample post image
 */
router.post("/:id/upload_sample", (req, res, next) => {
    
})

export { router as PersonaRouter }
