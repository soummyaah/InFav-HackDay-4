import { Router } from "express"
import { Series } from "../../types/Series"
import { pool } from "../db/psql"; // Import the pool instance
import { v4 as uuidv4 } from 'uuid';

const router = Router()

/**
 * get series by id
 */
router.get("/:id", async (req, res, next) => {
    const { id } = req.params;

    try {
        const series = await pool.query('SELECT * FROM series WHERE id = $1', [id]);
        if (series.rows.length === 0) {
            return res.status(404).json({ error: 'Series not found' });
        }
        res.status(200).json(series.rows[0]);
    } catch (err) {
        next(err); // Passes the error to the error handling middleware
    }
});

/**
 * creates a series
 */
router.post("/", async (req, res, next) => {
    const { strategy_id, series_type, brand_samples } = req.body.series as Series;

    const id = uuidv4(); // Generate a UUID for the series ID
    try {
        const newSeries = await pool.query(
            `INSERT INTO series (id, strategy_id, series_type, brand_samples) 
             VALUES ($1, $2, $3, $4) 
             RETURNING *`,
            [id, strategy_id, series_type, brand_samples]
        );
        res.status(201).json(newSeries.rows[0]);
    } catch (err) {
        next(err); // Passes the error to the error handling middleware
    }
});

/**
 * get series by id
 */
router.patch("/:id", async (req, res, next) => {
    const { id } = req.params;
    const { strategy_id, series_type, brand_samples } = req.body.series as Series;

    try {
        const updatedSeries = await pool.query(
            `UPDATE series 
             SET strategy_id = $1, series_type = $2, brand_samples = $3 
             WHERE id = $4 
             RETURNING *`,
            [strategy_id, series_type, brand_samples, id]
        );
        if (updatedSeries.rows.length === 0) {
            return res.status(404).json({ error: 'Series not found' });
        }
        res.status(200).json(updatedSeries.rows[0]);
    } catch (err) {
        next(err); // Passes the error to the error handling middleware
    }
});

/**
 * delete series by id
 */
router.delete("/:id", async (req, res, next) => {
    const { id } = req.params;

    try {
        const deleteResult = await pool.query('DELETE FROM series WHERE id = $1 RETURNING *', [id]);
        if (deleteResult.rows.length === 0) {
            return res.status(404).json({ error: 'Series not found' });
        }
        res.status(200).json({ message: 'Series deleted successfully' });
    } catch (err) {
        next(err); // Passes the error to the error handling middleware
    }
});

export { router as SeriesRouter }
