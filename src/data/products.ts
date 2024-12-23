// Generated 500 demo products across different categories
export const demoProducts = Array.from({ length: 500 }, (_, index) => ({
  id: `prod-${index + 1}`,
  title: [
    'Premium Wireless Headphones',
    'Smart Fitness Tracker',
    'Ultra HD 4K TV',
    'Professional DSLR Camera',
    'Gaming Laptop',
    'Smartphone',
    'Tablet',
    'Smartwatch',
    'Bluetooth Speaker',
    'Coffee Maker',
    'Air Purifier',
    'Robot Vacuum',
    'Microwave Oven',
    'Electric Kettle',
    'Blender',
    'Men\'s Running Shoes',
    'Women\'s Handbag',
    'Designer Sunglasses',
    'Leather Wallet',
    'Winter Jacket'
  ][index % 20] + ` - Model ${Math.floor(index / 20) + 1}`,
  price: Math.floor(Math.random() * 900) + 100,
  description: `High-quality product with premium features. Perfect for everyday use. Multiple color options available. Comes with a standard warranty.`,
  category: [
    'Electronics',
    'Fashion',
    'Home & Kitchen',
    'Sports & Outdoors',
    'Beauty & Personal Care'
  ][Math.floor(index / 100)],
  image: [
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
    'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f',
    'https://images.unsplash.com/photo-1491553895911-0055eca6402d',
    'https://images.unsplash.com/photo-1560769629-975ec94e6a86'
  ][index % 5] + '?auto=format&fit=crop&w=800&q=80',
  rating: (Math.random() * 2 + 3).toFixed(1),
  reviews: Math.floor(Math.random() * 1000),
  inStock: Math.random() > 0.2
}));