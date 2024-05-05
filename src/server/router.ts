import express from 'express';
import Test from '../shared/Test';

const router = express.Router();

router.get('/hello', async (_req, res) => {
  res.status(200).json({ message: Test() });
});

export default router;
