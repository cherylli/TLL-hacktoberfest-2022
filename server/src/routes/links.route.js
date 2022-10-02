const router = require('express').Router()
const linksController = require('../controllers/links.controller')

router.get('/', linksController.getAllLinks)
router.post('/', linksController.createLink)
router.put('/:urlID', linksController.editLink)


module.exports = router