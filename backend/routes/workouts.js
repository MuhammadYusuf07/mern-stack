const express = require ('express')

const router = express.Router()

// Get semua workouts
router.get('/', (req,res) => {
    res.json({mssg: 'GET Semua workouts'})
})

// Get workout sendiri
router.get('/:id', (req,res) => {
    res.json({mssg: 'GET workout sendiri'})
})

// POST workout baru
router.post('/', (req, res) => {
    res.json({mssg: 'POST workout baru'})
})

// Delete workout 
router.delete('/id', (req, res) => {
    res.json({mssg: 'DELETE workout'})
})

// UPDATE workout 
router.patch('/id', (req, res) => {
    res.json({mssg: 'UPDATE workout '})
})




module.exports = router