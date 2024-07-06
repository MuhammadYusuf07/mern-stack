const express = require ('express')
const {
    createWorkout,
    getWorkouts,
    getWorkout
} = require('../controllers/workoutController')


const router = express.Router()

// Get semua workouts
router.get('/', getWorkouts)

// Get workout sendiri
router.get('/:id', getWorkout)

// POST workout baru
router.post('/', createWorkout)

// Delete workout 
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE workout'})
})

// UPDATE workout 
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE workout '})
})




module.exports = router