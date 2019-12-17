# Converter App

## Bootstrap

1. Clone this repository
2. Install dependencies with `yarn`
3. Run application with `yarn start`
4. App is now running at [http://localhost:3000](http://localhost:3000).

## See final code

We are starting on master branch to make all our changes.
You can checkout `final` branch to see all changes.

## Steps (Moving to Hooks)

14. `PremiumLabel` component is already a functional component, so we can already use hooks here. Change it's background when users have selected the "Dark Theme".
15. We can simplify `Amount` component converting it to a functional component, again using `useContext` hook to get our global context.
16. Although we have an internal state in `Converter` component, we can use `useState` hook to simplify our component. Lets convert it to a functional component.
17. Our `App` component uses `componentDidUpdate` lifecycle method to react to state changes. We can make it a functional component by using the `useEffect` hook.
18. With our first release we allowed users to change the application theme with "Dark" and "Light" modes. Let's add an "Auto" option and create a custom hook, `usePreferredColorScheme`, that uses [match media API](https://www.freecodecamp.org/news/how-to-detect-a-users-preferred-color-scheme-in-javascript-ec8ee514f1ef/) to guess which will be the desired theme.
19. When our page is reloaded users lose they premium subscription and their theme configuration. Create a `useCachedState(key, defaultValue)` that stores this values inside `localStorage` and replace the `useState` hooks for `selectedTheme` and `premium`. **Warning**: we do not want to recalculate the value of localStorage everytime this hook is called.
20. For some reason Ethereum is becoming our most used cryptocurrenty, and we want this converter to work as fast as possible. Add an `focusOnMount` property to the `Converter` component (and the `Amount` component) and use the `useRef` hook to focus the Ethereum input automatically.
21. We found that this _focus on mount_ behaviour is really useful, extract it to a `useFocusOnMount` hook so we can reuse during the following weeks.

## Steps (React Context)

You can start from your own App from last week, or simply `git checkout start` to have an app ready to work with.

9. Our Product Owner foresees a demand in conversion for other cryptocurrencies: extract the convertion logic into a `<Converter />` component that takes a `cryptoName` and a `exchangeRate`. We can drop the crash to zero after 5 seconds functionality.
10. Add a second converter to our app, one for Ethereum \$ETH with a `1.2` `exchangeRate`. Add as many as you want.
11. Our design team finds the lack of a title per `<Converter />` a usuabillity problem. Allow the `<Converter />` component to render some custom markup to render it at the top of the component.
12. Monetization is key. Add an alert to warn the user about our freemium conversion model after 5 convertions are performed in any of the <Converter /> components in our app.
13. We need a way to let our users become Premium Members. Implement a _Become Premium_ button that removes the just implemented alert and adds a `💎 Premium conversion` message.

## Steps (Initial Application)

1. Add a number input with a label, "Euros".
2. Extract the input into a separate component called `<Amount />` that takes a `name` (eg. "Euros") prop.
3. (Optional) If it is not already, convert `<Amount />` into a class-based component.
4. Teach `<Amount />` input to show a red outline for negative amounts.
5. Make `<Amount />` a controlled component (ie. pass it its `value` as a prop).
6. Add a second, read-only `<Amount />` component that shows \$BTC instead of Euros; use this function to get the exchange rate:

   ```javascript
   function exchangeRate() {
     return Math.random() * 10000;
   }
   ```

7. Use `setTimeout` to make the \$BTC price crash to zero after 5 seconds of inactivity.
8. Use `React.createContext()` to provide a dark/light theme toggle.
