# React Calculator App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Overview

The React Calculator App is a simple and interactive calculator application built using React. It allows users to perform basic arithmetic calculations.

### Purpose

The app provides basic calculator functionality for users to perform simple calculations.

### Supported Operations

- Addition
- Subtraction
- Multiplication
- Division

### Unsupported Operations

The following operations are not supported in version 1:

- Percentage calculations
- Trigonometric functions (e.g., sin, cos, tan)
- Hyperbolic functions (e.g., sinh, cosh, tanh)
- Logarithmic and exponential functions (e.g., log, ln, exp)
- Other advanced scientific calculator functions

## Architecture

### Key Dependencies

- **React**: A JavaScript library for building user interfaces.
- **Mantine**: A library of customizable UI components.
- **React Router DOM**: A routing library for managing navigation within the React application.

## Setup Instructions

To set up and run the app locally, follow these steps:

1. **Install Dependencies**:

   Run the following command to install all necessary dependencies:

   ```bash
   npm install
   ```

2. **Run the App in Development Mode**:

   Start the development server with the following command:

   ```bash
   npm start
   ```

   This command will launch the app in development mode. Open [http://localhost:3000](http://localhost:3000) in your browser to view and use the calculator.

## Future Enhancements

### Planned Features for v2

- **Implement Unsupported Functions**: Add support for currently unsupported operations to expand the calculator's functionality.
- **Memory Functionality**: Introduce memory functions, allowing users to store and recall numbers for more complex calculations.
- **Negative Number Input**: Enable direct input of negative numbers. Currently, the workaround requires setting the first operand to 0, selecting the subtraction operation, and then entering the desired negative number.

### Planned Features for v3

- **Scientific Calculator Mode**: Allow users to switch between basic and scientific calculator modes, providing access to more advanced functions.
- **Backspace Functionality**: Implement the backspace button to allow users to correct input errors more efficiently.
