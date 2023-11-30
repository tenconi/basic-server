import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('este es el home desde ./router');
});


export default router;
