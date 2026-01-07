// seed.js
console.log('Seed script started...');

const db = require('../models'); // adjust path if needed

async function seed() {
  try {
    // Reset DB (drops and recreates tables)
    await db.sequelize.sync({ force: true });

    // Create categories
    const electronics = await db.Category.create({ name: 'Electronics' });
    const furniture = await db.Category.create({ name: 'Furniture' });

    // Create items linked to categories
    await db.Item.bulkCreate([
      { name: 'Laptop', price: 1200, quantity: 10, categoryId: electronics.id },
      { name: 'Chair', price: 50, quantity: 100, categoryId: furniture.id }
    ]);

    console.log('✅ Database seeded!');
  } catch (err) {
    console.error('❌ Error seeding database:', err);
  } finally {
    process.exit();
  }
}

seed();
