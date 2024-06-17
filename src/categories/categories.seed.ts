import { Category } from './categories.entity';

const categories = [
  { title: 'Electronics', description: 'Electronic items' },
  { title: 'Clothing', description: 'Apparel and garments' },
];

export const seedCategories = async () => {
  for (const category of categories) {
    await Category.create(category);
  }
};
