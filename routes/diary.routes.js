const {Router} = require('express')
const {
    myRoutes,
    addNewDiary,
    oneRoutes,
    updateRoutespage,
    updateRoutes,
    deleteDiary
} =  require('../controllers/diary.controllers')
const router = Router()

router.get('/my' , myRoutes )
router.post('/add' , addNewDiary)
router.get('/update/:id' , updateRoutespage)
router.get('/:id' , oneRoutes)
router.post('/updates/:id' , updateRoutes)
router.post('/delete/:id' , deleteDiary)

module.exports = router