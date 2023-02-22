import express from 'express';
import asyncHandler from 'express-async-handler';
import saveImg from '../controllers/test.js';

const router = express.Router();
// Middleware to parse the request body

// Handle POST request to upload an image

router.post('/img', asyncHandler(saveImg));

export default router;
