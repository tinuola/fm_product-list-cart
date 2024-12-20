## Frontend Mentor: Product List with Cart

Solution to the _[Product List with Cart](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d)_ challenge on Frontend Mentor.

### Challenge

- Build out a Product List using provided [desktop](/public/fm-assets/design/01_preview.jpg) and [mobile](/public/fm-assets/design/06_mobile-design-empty.jpg) designs
- Users should be able to:

  - [Add items to the cart](/public/fm-assets/design/04_desktop-design-selected.jpg) and remove them
  - Increase/decrease the number of items in the cart
  - See an [order confirmation modal](/public/fm-assets/design/05_desktop-design-order-confirmation.jpg) when they click "Confirm Order"
  - [Reset their selections](/public/fm-assets/design/02_desktop-design-empty.jpg) when they click "Start New Order"
  - View the optimal layout for the interface depending on their device's screen size
  - See hover and focus states for all interactive elements on the page

### Solution

Live Sites:

- Build (SFC) version: [tt-fm-product-list-cart.netlify.app](https://tt-fm-product-list-cart.netlify.app/) _(Current branch)_

- CDN version: [tinuola.github.io/fm_product-list-cart](https://tinuola.github.io/fm_product-list-cart/) _([CDN branch](https://github.com/tinuola/fm_product-list-cart/tree/cdnBuild))_

### Retrospective

- Vue 3 practice using CDN build and Single File Component (App) build; both with Composition API
- Updated color specs to improve on contrast ratios
- Mini-utility CSS styles to reduce repeated styles

### Tools & Resources

- HTML, CSS, JavaScript
- Vue 3, Pinia
- TypeScript

### Project Setup

Clone repository

In the project directory:

```sh
npm install
```

Compile and Hot-Reload for Development

```sh
npm run dev
```

Optional: Type-Check, Compile and Minify for Production

```sh
npm run build
```

Optional: Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
