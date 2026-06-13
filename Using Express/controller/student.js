import express from 'express'
const router = express.Router()
import { allStudents, newStudent, updateStudent, deleteStudent } from './index';

router.get('/all', allStudents )

router.put('/update', updateStudent)

router.post('/create', newStudent)

router.delete('/delete', deleteStudent)


app.use('./studensts')

export default router;