const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.get('/', categoryController.list);
router.get('/create', categoryController.showCreateForm);
router.post('/create', categoryController.create);
router.get('/edit/:id', categoryController.showEditForm);
router.post('/edit/:id', categoryController.update);
router.post('/delete/:id', categoryController.delete);

module.exports = router;
