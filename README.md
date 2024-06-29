## Website Preview
[https://binaryhexa.github.io/SEA_Salon/](https://binaryhexa.github.io/SEA_Salon/)

# How to Set Up the Application?
You have to clone the Repository first. Here's the step of what you can do:

![image](https://github.com/binaryhexa/SEA_Salon/assets/116893563/7f8d0ac5-5f9c-4e4e-b442-45e4b87ad96f)

- Click on the green "Code" button
- Copy the Repository URL
- Open your terminal
- Run this command on your terminal:
  
  ```js
  cd [your-directory]
  git clone https://github.com/binaryhexa/SEA_Salon.git
  cd [your-directory]/SEA_Salon
  npm install
  npm run dev

  
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
