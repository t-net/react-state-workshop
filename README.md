This is a workshop for React state built in Next.js.

## Getting Started

In each folder, to run the development server, you can run:

```bash
npm run dev
```

Open [http://localhost:9000](http://localhost:9000) with your browser to see the result.

### Tests

In the top level folder, to run the tests in all the folders, run:
```bash
npm t
```

### Building

In the top level folder, to run the build in all the folders, run:
```bash
npm run build
```

If you want to see that the types are correct everywhere, run:
```bash
npm run parse
```
This will exit without echoing anything if everything is ok. If there are any typescript errors, 
it will show here, even if the errors are in the tests files which won't cause build errors.

### Linting

In the top level folder, to run the lint in all the folders, run:
```bash
npm run lint
```
If you open the repo in Intellij, the linting will be fixed automatically on save action.

## Projects
### 1-vehicle-parts-booker
This is a dummy vehicle parts shop where you should be able to click on `+` and `-` for each product 
to increase the quantity and be able to click on `Add to cart` to add the specific quantity of the respective 
product to the cart. The tests for the unimplemented missing functionality have been skipped.

### 2-vehicle-parts-booker-use-state
This implements `1-vehicle-parts-booker` by only using `useState` and props drilling as a state management solution.

### 3-vehicle-parts-booker-use-context
This implements `1-vehicle-parts-booker` by using `useState` for local quantity state and `useContext` for 
managing top level state such as the `cartItems` array and `addToCart` function.

### 4-vehicle-parts-booker-use-reducer
This implements `1-vehicle-parts-booker` by using `useState` for local quantity state and `useReducer` and 
`useContext` for accessing the `dispatch` action to add an item to the cart and to access the `cartItems` array.

