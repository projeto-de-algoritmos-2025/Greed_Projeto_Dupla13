import Router from 'express';

import addTask from '../controller/dataOperations/addTask.js'
import readTask from '../controller/dataOperations/readTasks.js'
import removeTask from '../controller/dataOperations/removeTask.js'

const router = Router();

router.get('/task', readTask);
router.post('/task/add', addTask);
router.post('/task/remove', removeTask);

export default router;