# 🍔 Foodies Hub – Responsive E-Commerce Fast Food Website

# Project Overview

Foodies Hub is a responsive front-end e-commerce website developed as part of a web development assignment. The website simulates an online fast-food ordering system where users can browse menu items, view product details, manage a shopping cart, and contact the restaurant.

The project has been developed using **HTML5**, **CSS3**, and **JavaScript** without using any backend technology or third-party frameworks.



# Objectives

The main objectives of this project are to:

- Design a responsive e-commerce website.
- Apply HTML semantic structure.
- Create an attractive user interface using CSS.
- Implement interactive functionality using JavaScript.
- Store shopping cart data using Local Storage.
- Demonstrate responsive web design principles.
- Consider accessibility and basic SEO practices.


# Technologies Used

- HTML5
- CSS3
- JavaScript (DOM Manipulation)
- Browser Local Storage


# Website Features

The website includes the following functionality:

- Responsive navigation bar
- Hero/banner section
- Fast-food product catalogue
- Product cards with:
  - Images
  - Product names
  - Categories
  - Descriptions
  - Prices
  - Ratings
  - Promotional badges
- Product details page
- Shopping cart system
- Quantity management
- Remove products from cart
- Clear cart functionality
- Automatic total price calculation
- Contact form
- About page
- Responsive layout for desktop, tablet, and mobile devices



# Website Pages

## Home Page

The homepage introduces Foodies Hub and provides navigation to the rest of the website.

Features include:

- Logo
- Navigation bar
- Hero section
- Featured food items
- Footer



## Menu Page

The menu page displays the available food products.

Each product includes:

- Product image
- Product name
- Category
- Description
- Price
- Add to Cart button

The website currently includes 12 products:

1. Classic Beef Burger
2. Crispy Chicken Burger
3. Double Cheese Burger
4. Veggie Delight Burger
5. Spicy Chicken Wings
6. Loaded French Fries
7. Pepperoni Pizza
8. Classic Hot Dog
9. Chocolate Milkshake
10. Chicken Nuggets
11. Grilled Chicken Wrap
12. Family Feast Combo



## Product Details Page

Displays detailed information for an individual product including:

- Product image
- Category
- Description
- Price
- Add to Cart button



## About Page

Provides information about Foodies Hub including:

- Company introduction
- Mission
- Food quality


## Contact Page

Contains a customer enquiry form including:

- Name
- Email
- Message
- Submit button



## Shopping Cart Page

Allows users to:

- View selected products
- Increase quantity
- Decrease quantity
- Remove products
- Clear the entire cart
- View the calculated total price



# Shopping Cart Functionality

The shopping cart has been implemented using JavaScript and Browser Local Storage.

Available functions include:

- Add products
- Increase quantity
- Decrease quantity
- Remove products
- Clear cart
- Calculate total price
- Save cart after page refresh

The total price is calculated using:


Product Price × Quantity



# JavaScript Functions

The project includes the following JavaScript functions:

### addToCart()

Adds a selected product to the shopping cart.

### displayCart()

Displays all cart items and calculates the total price.

### increaseQuantity()

Increases the quantity of a selected product.

### decreaseQuantity()

Decreases the quantity of a selected product.

If the quantity reaches zero, the product is removed.

### removeItem()

Removes an individual item from the cart.

### clearCart()

Removes all products from the shopping cart.

### saveCart()

Saves the cart to Local Storage and refreshes the displayed cart.

### validateForm()

Used for client-side validation of the contact form (where implemented).



# Responsive Design

The website is fully responsive using:

- CSS Grid
- Flexbox
- Media Queries

The layout automatically adapts for:

- Desktop
- Tablet
- Mobile



# User Interface Features

The design includes:

- Modern fast-food colour scheme
- Product cards
- Hover effects
- Rounded buttons
- Product badges
- Star ratings
- Responsive images
- Consistent navigation
- Sticky header
- Footer on every page



# Accessibility

Accessibility considerations include:

- Alternative text for images
- Form labels
- Semantic HTML elements
- Clear page headings
- Good colour contrast
- Responsive layouts

The project can be further evaluated using Google Chrome Lighthouse.



# Basic SEO

The website includes basic SEO practices such as:

- Appropriate page titles
- Semantic headings
- Descriptive image alt attributes
- Structured HTML
- Meaningful navigation links



# Testing

The following functionality has been tested:

### Navigation

- Home page
- Menu page
- About page
- Contact page
- Shopping cart page

### Product Testing

- Product images
- Product names
- Product prices
- Categories
- Add to Cart buttons

### Shopping Cart Testing

- Add products
- Increase quantity
- Decrease quantity
- Remove products
- Clear cart
- Automatic total calculation
- Local Storage persistence

### Contact Form Testing

- Name field
- Email field
- Message field
- Empty field validation

### Responsive Testing

Tested on:

- Desktop
- Tablet
- Mobile

### Browser Testing

The website has been tested using Google Chrome.



# Project Structure


Foodies-Hub/
│
├── index.html
├── menu-details.html
├── product-details.html
├── about.html
├── contact.html
├── cart.html
│
├── style.css
│
├── js/
│   └── script.js
│
├── images/
│
├── evidence/
│   ├── Problem1.png
│   ├── Fix1.png
│   ├── Problem2.png
│   └── Fix2.png
│
└── README.md


# How to Run the Project

1. Download or clone the repository.
2. Open the project folder.
3. Ensure all HTML, CSS, JavaScript, and image files remain in their original locations.
4. Open **index.html** in a modern web browser such as Google Chrome.
5. Navigate through the website using the navigation menu.

No installation or server is required.



# Limitations

This project is intended as a front-end demonstration only.

It does not include:

- Backend database
- User authentication
- Online payment gateway
- Order processing
- Admin dashboard
- Server-side functionality

The shopping cart is simulated using JavaScript and Browser Local Storage.



# Future Improvements

Potential enhancements include:

- User login and registration
- Search and filtering
- Product categories
- Checkout page
- Online payment integration
- Order confirmation
- Database integration
- Admin management system
- Product reviews
- Favourite items



# Author

Fouzia Subtain

Level 3 - Computing
College Assignment – Responsive E-Commerce Website



# License

This project has been created for Assignment.

# GITHUB

## Accessibility Evidence

Accessibility testing was carried out using Google Chrome Lighthouse.

The following screenshots are included in the evidence folder:

- family pack.png – image not found.
- Fix1.png – showed picture.
- cart to home – link was not working.
- link fixed – Second issue resolved.