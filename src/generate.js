const fs = require('fs');

// Lista de nombres y descripciones para hacer los productos más variados
const names = [
  'Smartphone', 'Laptop', 'Headphones', 'Keyboard', 'Mouse', 'Monitor',
  'Desk Lamp', 'Chair', 'Coffee Maker', 'Blender', 'Vacuum Cleaner',
  'Air Conditioner', 'Washing Machine', 'Refrigerator', 'Microwave',
  'Toaster', 'Book', 'Notebook', 'Pen', 'Pencil', 'Backpack'
];

const descriptions = [
  'High quality and durable', 'Latest model with advanced features', 'Affordable and efficient',
  'Comfortable and stylish', 'Ideal for daily use', 'Compact and powerful',
  'Perfect for home and office', 'Sleek and modern design', 'Reliable and easy to use',
  'Great for gifting', 'Energy-saving and eco-friendly', 'User-friendly and versatile'
];

// Genera un nombre de producto aleatorio
function generateRandomName() {
  const randomName = names[Math.floor(Math.random() * names.length)];
  return `${randomName} ${Math.floor(Math.random() * 1000) + 1}`; // Agrega un número aleatorio al nombre
}

// Genera un producto de ejemplo
function generateProduct(index) {
  const categories = ['electronics', 'clothing', 'home', 'books'];
  return {
    title: generateRandomName(), // Nombre aleatorio
    description: descriptions[Math.floor(Math.random() * descriptions.length)], // Descripción aleatoria
    price: Math.floor(Math.random() * 1000) + 1, // Precio entre 1 y 1000
    code: `CODE${index}`, // Código único
    stock: Math.floor(Math.random() * 101), // Stock entre 0 y 100
    status: Math.random() > 0.5, // Estado aleatorio (true o false)
    category: categories[Math.floor(Math.random() * categories.length)] // Categoría aleatoria
  };
}

// Genera un array con 1000 productos
function generateProducts(num) {
  const products = [];
  for (let i = 1; i <= num; i++) {
    products.push(generateProduct(i));
  }
  return products;
}

// Guarda los productos en un archivo JSON
function saveProductsToJSON(filename, products) {
  fs.writeFileSync(filename, JSON.stringify(products, null, 2), 'utf-8');
  console.log(`Archivo ${filename} creado con éxito.`);
}

// Generar y guardar 1000 productos
const products = generateProducts(1000);
saveProductsToJSON('products.json', products);
