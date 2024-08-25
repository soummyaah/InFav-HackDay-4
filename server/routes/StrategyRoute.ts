import { Router } from "express"
import { Strategy } from "../../types/Strategy"

const router = Router()

/**
 * get strategy by id
 */
router.get("/:id", (req, res, next) => {
    const { id } = req.params
})

/**
 * creates a strategy
 */
router.post("/", (req, res, next) => {
    const strategy = <Strategy>req.body.strategy
})

/**
 * get strategy by id
 */
router.patch("/:id", (req, res, next) => {
    const { id } = req.params
})

/**
 * delete strategy by id
 */
router.delete("/:id", (req, res, next) => {
    const { id } = req.params
})
