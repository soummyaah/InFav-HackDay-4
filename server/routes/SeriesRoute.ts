import { Router } from "express"
import { Series } from "../../types/Series"

const router = Router()

/**
 * get series by id
 */
router.get("/:id", (req, res, next) => {
    const { id } = req.params
})

/**
 * creates a series
 */
router.post("/", (req, res, next) => {
    const series = <Series>req.body.series
})

/**
 * get series by id
 */
router.patch("/:id", (req, res, next) => {
    const { id } = req.params
})

/**
 * delete series by id
 */
router.delete("/:id", (req, res, next) => {
    const { id } = req.params
})