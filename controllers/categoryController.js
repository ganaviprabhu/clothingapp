const db = require('../models');

exports.list = async (req, res) => {
  const categories = await db.Category.findAll();
  res.render('categories/list', { categories });
};

exports.showCreateForm = (req, res) => {
  res.render('categories/form', { category: {} });
};

exports.create = async (req, res) => {
  await db.Category.create(req.body);
  res.redirect('/categories');
};

exports.showEditForm = async (req, res) => {
  const category = await db.Category.findByPk(req.params.id);
  res.render('categories/form', { category });
};

exports.update = async (req, res) => {
  await db.Category.update(req.body, { where: { id: req.params.id } });
  res.redirect('/categories');
};

exports.delete = async (req, res) => {
  await db.Category.destroy({ where: { id: req.params.id } });
  res.redirect('/categories');
};
