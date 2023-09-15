const router = require('express').Router();
const { body } = require('express-validator');

const personController = require('../controllers/person');

router.post('/',
    body('name').trim().isString().notEmpty(),
    personController.createPerson
)

router.get('/:personId', personController.getPerson)

router.put('/:personId', personController.updatePerson)

router.delete('/:personId', personController.deletePerson)

module.exports = router;