# React Kawaii

<p align="center">
  <img src="https://raw.githubusercontent.com/miukimiu/react-kawaii/main/images/react-kawaii-logo@2x.png"alt="React Kawaii Logo">
</p>


Welcome to **React Kawaii**! This repository contains both the website and the React package.

React Kawaii is an open source library of cute SVG illustrations. Perfect if you want to give some cuteness to your React App.

## Example

<p align="center">
  <img src="https://raw.githubusercontent.com/miukimiu/react-kawaii/main/images/react-kawaii-example.gif?raw=true" alt="React Kawaii Example">
</p>

## Website

The website for React Kawaii is located in the `apps/website` directory. It serves as a documentation hub and may also include demos, tutorials, and other resources related to the project.

To start the website locally:

1. Navigate to the `apps/website` directory.
2. Install dependencies with `pnpm install`.
3. Run the development server with `pnpm start`.

## React Package

The React package, named `react-kawaii`, is located in the `packages/react-kawaii` directory. It contains the source code for the React components.

To use the `react-kawaii` package in your projects:

1. Install it from npm or yarn:

   ```
   npm install --save react-kawaii
   ```

   or

   ```
   yarn add react-kawaii
   ```

2. Import the components you need in your React application:

   ```javascript
   import { Planet } from 'react-kawaii';

   const MyComponent = () => {
     return <Planet size={200} mood="blissful" color="#FDA7DC" />;
   }
   ```

For detailed documentation and usage examples, visit the [React Kawaii documentation website](https://react-kawaii.vercel.app).

## Contributing

Contributions to React Kawaii are welcome! Feel free to open issues or pull requests if you have any suggestions, bug fixes, or improvements.

## License

This project is licensed under the [MIT License](LICENSE).
