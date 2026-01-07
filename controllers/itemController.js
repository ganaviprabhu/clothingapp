const db = require('../models');

// Show all items
exports.list = async (req, res) => {
  try {
    // Include the category data for each item
    const items = await db.Item.findAll({
      include: db.Category
    });
    res.render('items/list', { items });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// Show form to create a new item
exports.showCreateForm = async (req, res) => {
  try {
    // Fetch categories to populate dropdown
    const categories = await db.Category.findAll();
    res.render('items/form', { item: {}, categories });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// Create a new item
exports.create = async (req, res) => {
  try {
    await db.Item.create({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      quantity: req.body.quantity,
      category_id: req.body.category_id || null
    });
    res.redirect('/items');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// Show form to edit an existing item
exports.showEditForm = async (req, res) => {
  try {
    const item = await db.Item.findByPk(req.params.id);
    const categories = await db.Category.findAll();
    if (!item) return res.status(404).send('Item not found');
    res.render('items/form', { item, categories });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// Update an existing item
exports.update = async (req, res) => {
  try {
    await db.Item.update(
      {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        quantity: req.body.quantity,
        category_id: req.body.category_id || null
      },
      { where: { id: req.params.id } }
    );
    res.redirect('/items');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// Delete an item
exports.delete = async (req, res) => {
  try {
    await db.Item.destroy({ where: { id: req.params.id } });
    res.redirect('/items');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
