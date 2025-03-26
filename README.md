# ShopMart - E-commerce React Application

A modern e-commerce application built with React, featuring a responsive design, cart management, and integration with the Fake Store API.

## 🚀 Features

- **Product Catalog**: Browse products by categories
- **Shopping Cart**: Add, remove, and update product quantities
- **Category Navigation**: Filter products by different categories
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Search Functionality**: Search products by name or description
- **Real-time Cart Updates**: Instant price and quantity updates
- **User-friendly Interface**: Clean and intuitive design

## 🛠️ Technologies Used

- React 18
- React Router v6
- Axios for API calls
- Vite as build tool
- CSS3 for styling
- Font Awesome icons
- Fake Store API

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/NikitaGhimire/my-shopping-cart.git
cd my-shopping-cart
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## 🔧 Configuration

Create a `.env` file in the root directory:
```env
VITE_API_URL=https://fakestoreapi.com
```

## 🏗️ Project Structure

```
my-shopping-cart/
├── src/
│   ├── components/       # Reusable components
│   ├── pages/           # Page components
│   ├── assets/          # Static assets
│   ├── App.jsx          # Main application component
│   └── main.jsx         # Application entry point
├── public/              # Public assets
└── package.json         # Project dependencies
```

## 🖥️ Components

- **Navbar**: Navigation and cart summary
- **ProductCard**: Individual product display
- **Cart**: Shopping cart management
- **CategoryPage**: Category-specific product listings
- **Footer**: Contact links and copyright

## 🔄 API Integration

The application uses the Fake Store API for product data:
- GET `/products`: Fetch all products
- GET `/products/category/:categoryName`: Fetch category products
- GET `/categories`: Fetch available categories

## 🎨 Styling

- Responsive design using CSS Grid and Flexbox
- Mobile-first approach
- Custom CSS properties for consistent theming
- Smooth animations and transitions

## 👤 Developer

- **Nikita Ghimire**
- Portfolio: [nikita.info.np](https://nikita.info.np)
- LinkedIn: [nikita-ghimire-info](https://linkedin.com/in/nikita-ghimire-info)
- GitHub: [NikitaGhimire](https://github.com/NikitaGhimire)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Fake Store API](https://fakestoreapi.com/) for providing the product data
- [Font Awesome](https://fontawesome.com/) for the icons
- React community for excellent documentation and support
