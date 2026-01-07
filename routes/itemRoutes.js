const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// Display all items
router.get('/', itemController.list);

// Show form to create a new item
router.get('/create', itemController.showCreateForm);

// Handle creation of new item
router.post('/create', itemController.create);

// Show form to edit an existing item
router.get('/edit/:id', itemController.showEditForm);

// Handle updating an existing item
router.post('/edit/:id', itemController.update);

// Handle deleting an item
router.post('/delete/:id', itemController.delete);

module.exports = router;
