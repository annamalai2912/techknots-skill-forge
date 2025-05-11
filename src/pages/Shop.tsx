import { useState } from 'react';
import RevealOnScroll from '@/components/RevealOnScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { ShoppingCart as CartIcon, Heart, Search, Filter, Star, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import ShoppingCartComponent from '@/components/ShoppingCart';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  rating: number;
  stock: number;
  image: string;
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Shop = () => {
  const { toast } = useToast();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);
  
  // Sample IoT components for sale
  const products = [
    {
      id: 1,
      name: 'Arduino Uno R3 Microcontroller',
      description: 'The Arduino Uno is a microcontroller board based on the ATmega328P. Perfect for beginners and advanced projects.',
      price: 699,
      category: 'Microcontrollers',
      rating: 4.8,
      stock: 50,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    },
    {
      id: 2,
      name: 'Raspberry Pi 4 Model B',
      description: 'The latest Raspberry Pi 4 with 4GB RAM, ideal for desktop computing and IoT projects.',
      price: 4500,
      category: 'Microcontrollers',
      rating: 4.9,
      stock: 25,
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    },
    {
      id: 3,
      name: 'DHT22 Temperature & Humidity Sensor',
      description: 'High-precision temperature and humidity sensor module for accurate environmental monitoring.',
      price: 349,
      category: 'Sensors',
      rating: 4.7,
      stock: 100,
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    },
    {
      id: 4,
      name: 'HC-SR04 Ultrasonic Distance Sensor',
      description: 'Ultrasonic distance measuring module with 2cm-400cm range for robotics and automation.',
      price: 89,
      category: 'Sensors',
      rating: 4.5,
      stock: 150,
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
    },
    {
      id: 5,
      name: 'NodeMCU ESP8266 WiFi Module',
      description: 'ESP8266 WiFi development board for IoT applications with built-in USB programming.',
      price: 399,
      category: 'Communication',
      rating: 4.6,
      stock: 75,
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
    },
    {
      id: 6,
      name: 'Servo Motor SG90',
      description: 'Small lightweight servo motor for robotics, perfect for beginners and educational projects.',
      price: 119,
      category: 'Actuators',
      rating: 4.4,
      stock: 200,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    },
    {
      id: 7,
      name: 'RFID Reader Module RC522',
      description: '13.56MHz RFID reader/writer module for security and access control systems.',
      price: 249,
      category: 'Communication',
      rating: 4.3,
      stock: 60,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    },
    {
      id: 8,
      name: 'Breadboard 830 Points',
      description: 'Solderless breadboard with 830 tie points for prototyping electronic circuits.',
      price: 149,
      category: 'Accessories',
      rating: 4.7,
      stock: 120,
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    },
    {
      id: 9,
      name: 'IoT Starter Kit',
      description: 'Complete IoT starter kit including NodeMCU, sensors, actuators, and connection cables.',
      price: 1499,
      category: 'Kits',
      rating: 4.9,
      stock: 15,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    }
  ];

  const categories = ['All', 'Microcontrollers', 'Sensors', 'Actuators', 'Communication', 'Accessories', 'Kits'];
  
  // Apply all filters (category, search, price)
  const filteredProducts = products.filter(product => {
    // Category filter
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    
    // Search filter
    const matchesSearch = searchQuery === '' || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Price filter
    const minPriceValue = minPrice !== '' ? parseInt(minPrice) : 0;
    const maxPriceValue = maxPrice !== '' ? parseInt(maxPrice) : Infinity;
    const matchesPrice = product.price >= minPriceValue && product.price <= maxPriceValue;
    
    return matchesCategory && matchesSearch && matchesPrice;
  });

  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      // Check if item is already in cart
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        // Item exists, update quantity
        return prevItems.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        // Item doesn't exist, add new item
        return [
          ...prevItems, 
          { 
            id: product.id, 
            name: product.name, 
            price: product.price, 
            quantity: 1,
            image: product.image
          }
        ];
      }
    });
    
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
    
    // Open the cart after adding an item
    setIsCartOpen(true);
  };

  const updateItemQuantity = (id: number, newQuantity: number) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart."
    });
  };

  const toggleWishlist = (productId: number) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId));
      toast({
        title: "Removed from wishlist",
        description: "Item has been removed from your wishlist."
      });
    } else {
      setWishlist([...wishlist, productId]);
      toast({
        title: "Added to wishlist",
        description: "Item has been added to your wishlist."
      });
    }
  };

  const applyPriceFilter = () => {
    // The filtering is already handled in filteredProducts
    toast({
      title: "Filters applied",
      description: "Price filters have been applied to your search."
    });
  };

  return (
    <>
      <Navbar />
      
      <div className="pt-24 bg-techknot-ivory min-h-screen">
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-techknot-purple mb-4">IoT Components Shop</h1>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Explore our extensive collection of high-quality IoT components for all your 
                projects and educational needs.
              </p>
              <div className="mt-6">
                <Button 
                  onClick={() => setIsCartOpen(true)}
                  className="bg-techknot-blue hover:bg-techknot-purple flex items-center gap-2"
                >
                  <CartIcon size={18} />
                  Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
                </Button>
              </div>
            </div>
          </RevealOnScroll>

          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="md:w-1/4 bg-white p-6 rounded-lg shadow-md h-fit">
              <div className="mb-6">
                <h3 className="text-lg font-semibold flex items-center mb-4">
                  <Filter size={18} className="mr-2 text-techknot-blue" /> Categories
                </h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      className={`block w-full text-left px-3 py-2 rounded transition-colors ${
                        activeCategory === category 
                          ? 'bg-techknot-blue text-white' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      onClick={() => setActiveCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold flex items-center mb-4">
                  <Search size={18} className="mr-2 text-techknot-blue" /> Search
                </h3>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search products..." 
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-techknot-blue"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search className="absolute right-3 top-2.5 text-gray-400" size={18} />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Price Range</h3>
                <div className="flex items-center space-x-2">
                  <input 
                    type="number" 
                    placeholder="Min" 
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-techknot-blue"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                  />
                  <span>-</span>
                  <input 
                    type="number" 
                    placeholder="Max" 
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-techknot-blue"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                  />
                </div>
                <Button 
                  className="w-full mt-4 bg-techknot-blue hover:bg-techknot-purple"
                  onClick={applyPriceFilter}
                >
                  Apply Filter
                </Button>
              </div>
            </div>

            <div className="md:w-3/4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <RevealOnScroll key={product.id} delay={index * 100}>
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100 group">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        />
                        <button 
                          className="absolute top-3 right-3 bg-white p-1.5 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                          onClick={() => toggleWishlist(product.id)}
                        >
                          <Heart 
                            size={18} 
                            className={wishlist.includes(product.id) ? "text-red-500 fill-red-500" : "text-gray-400 hover:text-red-500"} 
                          />
                        </button>
                        {product.stock < 20 && (
                          <span className="absolute top-3 left-3 bg-red-500 text-white px-2 py-0.5 text-xs font-medium rounded">
                            Low Stock
                          </span>
                        )}
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="text-lg font-bold text-gray-800 line-clamp-1">{product.name}</h3>
                        </div>
                        <div className="flex items-center mb-2">
                          <div className="flex items-center mr-2">
                            {Array(5).fill(0).map((_, i) => (
                              <Star 
                                key={i} 
                                size={14} 
                                className={i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-gray-600">({product.rating})</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-bold text-techknot-purple">₹{product.price}</span>
                          <Button 
                            className="bg-techknot-blue hover:bg-techknot-purple flex items-center gap-1"
                            onClick={() => addToCart(product)}
                          >
                            <ShoppingCart size={16} /> Add to Cart
                          </Button>
                        </div>
                      </div>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-12 bg-white rounded-lg shadow">
                  <p className="text-lg text-gray-600">No products found for this category.</p>
                </div>
              )}

              {filteredProducts.length > 0 && (
                <div className="text-center mt-12">
                  <Button className="bg-techknot-blue hover:bg-techknot-purple">
                    Load More Products
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <ShoppingCartComponent 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        updateItemQuantity={updateItemQuantity}
        removeItem={removeItem}
      />
      
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Shop;
