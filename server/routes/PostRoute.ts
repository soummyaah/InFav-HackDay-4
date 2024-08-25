import { Router } from "express"
import { Post } from "../../types/Post"
import {pool} from "../db/psql";
import {v4 as uuidv4} from "uuid";

const router = Router()

/**
 * get a post by id
 */
router.get("/:id", async (req, res, next) => {
    const { id } = req.params;

    try {
        const post = await pool.query('SELECT * FROM post WHERE id = $1', [id]);
        if (post.rows.length === 0) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.status(200).json(post.rows[0]);
    } catch (err) {
        next(err); // Passes the error to the error handling middleware
    }
});

/**
 * Create a new post
 */
router.post("/", async (req, res, next) => {
    const { series_id, engagement_metrics, post_data } = req.body.post as Post;

    const id = uuidv4();
    try {
        const newPost = await pool.query(
            `INSERT INTO post (id, series_id, engagement_metrics, post_data)
             VALUES ($1, $2, $3, $4)
                 RETURNING *`,
            [id, series_id, engagement_metrics, post_data]
        );
        res.status(201).json(newPost.rows[0]);
    } catch (err) {
        next(err); // Passes the error to the error handling middleware
    }
});

/**
 * patch post by id
 */
router.patch("/:id", async (req, res, next) => {
    const { id } = req.params;
    const { series_id, engagement_metrics, post_data } = req.body.post as Post;

    try {
        const updatedPost = await pool.query(
            `UPDATE post 
             SET series_id = $1, engagement_metrics = $2, post_data = $3
             WHERE id = $4
             RETURNING *`,
            [series_id, engagement_metrics, post_data, id]
        );
        if (updatedPost.rows.length === 0) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.status(200).json(updatedPost.rows[0]);
    } catch (err) {
        next(err); // Passes the error to the error handling middleware
    }
});

/**
 * delete post by id
 */
router.delete("/:id", async (req, res, next) => {
    const { id } = req.params;

    try {
        const deleteResult = await pool.query('DELETE FROM post WHERE id = $1 RETURNING *', [id]);
        if (deleteResult.rows.length === 0) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (err) {
        next(err); // Passes the error to the error handling middleware
    }
});

export { router as PostRouter }

