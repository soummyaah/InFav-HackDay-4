import { Router } from "express"
import { Post } from "../../types/Post"

const router = Router()

/**
 * get a post by id
 */
router.post("/:id", (req, res, next) => {
    const { id } = req.params
})

/**
 * patch post by id
 */
router.patch("/:id", (req, res, next) => {
    const { id } = req.params
})

/**
 * delete post by id
 */
router.delete("/:id", (req, res, next) => {
    const { id } = req.params
})

export { router as PostRouter }

