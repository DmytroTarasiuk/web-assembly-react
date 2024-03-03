## Getting Started

Follow these steps to run the app locally:

1. **Clone the repository**:
   `git clone https://github.com/DmytroTarasiuk/web-assembly-react.git`

2. **Navigate to the project directory**:
   `cd web-assembly-react`

3. **Install Dependencies**:
   `npm install`

4. **Start the Development Server**:
   `npm start`

## Assembly Script Integration

To integrate your Assembly Script into the project, follow these steps:

1. **Navigate to the assemblyscript directory**:
   `cd assemblyscript`
2. **Install Dependencies**:
   `npm install`
3. Locate the `assemblyscript/assembly/index.ts` file to make modifications to your Assembly Script.
4. After completing the Assembly Script, build it by executing the command `npm run asbuild`.
5. In the `assemblyscript/build` folder, you will find the newly generated `release.wasm` file.
6. Copy the `release.wasm` file and paste it into the public folder of your React application.

These steps ensure the proper incorporation and deployment of your Assembly Script within the project.

## Technologies Used

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Material-UI](https://material-ui.com/)
- [recharts](https://www.npmjs.com/package/recharts)
- [assemblyscript](https://www.npmjs.com/package/assemblyscript)
- [Other Technologies]
