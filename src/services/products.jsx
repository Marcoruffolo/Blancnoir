import { getProducts as getProductsFromDB, getProductsByCategory as getProductsByCategoryFromDB, getProductById as getProductByIdFromDB } from '../Firebase/db';
import { mockProducts } from './mockProducts';

const withDelay = (fn, delay = 500) => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const data = await fn();
        resolve(data);
      } catch (error) {
        reject(error);
      }
    }, delay);
  });
};

const filterByCategory = (categoryId) => {
  return mockProducts.filter((product) => product.category === categoryId);
};

const findById = (productId) => {
  return mockProducts.find((product) => product.id === productId) || null;
};

export const getProducts = () => {
  return withDelay(async () => {
    try {
      const data = await getProductsFromDB();
      if (!data || data.length === 0) {
        return mockProducts;
      }
      return data;
    } catch {
      return mockProducts;
    }
  });
};

export const getProductsByCategory = (categoryId) => {
  return withDelay(async () => {
    try {
      const data = await getProductsByCategoryFromDB(categoryId);
      if (!data || data.length === 0) {
        return filterByCategory(categoryId);
      }
      return data;
    } catch {
      return filterByCategory(categoryId);
    }
  });
};

export const getProductById = (productId) => {
  return withDelay(async () => {
    try {
      const data = await getProductByIdFromDB(productId);
      if (!data) {
        return findById(productId);
      }
      return data;
    } catch {
      return findById(productId);
    }
  });
};

