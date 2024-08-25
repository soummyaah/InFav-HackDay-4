import { Router } from "express"
import { Strategy } from "../../types/Strategy"
import { pool } from "../db/psql"; // Import the pool instance
import { v4 as uuidv4 } from 'uuid';

const router = Router()

/**
 * get strategy by id
 */
router.get("/:id", async (req, res, next) => {
    const { id } = req.params;

    try {
        const strategy = await pool.query('SELECT * FROM strategy WHERE id = $1', [id]);
        if (strategy.rows.length === 0) {
            return res.status(404).json({ error: 'Strategy not found' });
        }
        res.status(200).json(strategy.rows[0]);
    } catch (err) {
        next(err); // Passes the error to the error handling middleware
    }
});

/**
 * creates a strategy
 */
router.post("/", async (req, res, next) => {
    const { persona_id, timeline, audience, goals, content_needs, value_prop } = req.body.strategy as Strategy;

    const id = uuidv4(); // Generate a UUID for the strategy ID
    try {
        const newStrategy = await pool.query(
            `INSERT INTO strategy (id, persona_id, timeline, audience, goals, content_needs, value_prop) 
             VALUES ($1, $2, $3, $4, $5, $6, $7) 
             RETURNING *`,
            [id, persona_id, timeline, audience, goals, content_needs, value_prop]
        );
        res.status(201).json(newStrategy.rows[0]);
    } catch (err) {
        next(err); // Passes the error to the error handling middleware
    }
});

/**
 * get strategy by id
 */
router.patch("/:id", async (req, res, next) => {
    const { id } = req.params;
    const { persona_id, timeline, audience, goals, content_needs, value_prop } = req.body.strategy as Strategy;

    try {
        const updatedStrategy = await pool.query(
            `UPDATE strategy 
             SET persona_id = $1, timeline = $2, audience = $3, goals = $4, content_needs = $5, value_prop = $6 
             WHERE id = $7 
             RETURNING *`,
            [persona_id, timeline, audience, goals, content_needs, value_prop, id]
        );
        if (updatedStrategy.rows.length === 0) {
            return res.status(404).json({ error: 'Strategy not found' });
        }
        res.status(200).json(updatedStrategy.rows[0]);
    } catch (err) {
        next(err); // Passes the error to the error handling middleware
    }
});


/**
 * delete strategy by id
 */
router.delete("/:id", async (req, res, next) => {
    const { id } = req.params;

    try {
        const deleteResult = await pool.query('DELETE FROM strategy WHERE id = $1 RETURNING *', [id]);
        if (deleteResult.rows.length === 0) {
            return res.status(404).json({ error: 'Strategy not found' });
        }
        res.status(200).json({ message: 'Strategy deleted successfully' });
    } catch (err) {
        next(err); // Passes the error to the error handling middleware
    }
});

export { router as StrategyRouter }
