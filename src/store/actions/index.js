const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const UPDATE_QUANTITY_TO_CART = 'UPDATE_QUANTITY_TO_CART';
const CLEAR_CART = 'CLEAR_CART';

export function addToCartMessage(product, size, count) {
  return buildMessage(ADD_TO_CART, { product, size, count });
}

export function removeFromCartMessage(productId) {
  return buildMessage(REMOVE_FROM_CART, { productId });
}

export function updateQuantityToCartMessage(productId, size, count) {
  return buildMessage(UPDATE_QUANTITY_TO_CART, { productId, size, count });
}

export function clearCartMessage() {
  return buildMessage(CLEAR_CART, {});
}

function buildMessage(type, payload) {
  return { type, payload };
}

const messageHandlers = {
  [ADD_TO_CART]: addToCart,
  [REMOVE_FROM_CART]: removeFromCart,
  [UPDATE_QUANTITY_TO_CART]: updateQuantityToCart,
  [CLEAR_CART]: clearCart
};

function handleMessage(state, { type, payload }) {
  const handler = messageHandlers[type];

  if (!handler) return state;

  return handler(state, payload);
}

function addToCart(state, { product, size, count }) {
  const products = [
    ...state.products
  ];

  if (!products.find(x => x.product === product.PathName && x.size === size)) {
    products.push({ product: product.PathName, count, size });
  }

  return {
    ...state,
    products
  };
}

function removeFromCart(state, { productId }) {
  const {
    [productId]: removedProduct, // eslint-disable-line no-unused-vars
    ...products
  } = state.products;

  return {
    ...state,
    products
  };
}


function updateQuantityToCart(state, { productId, size, count }) {
  const products = [
    ...state.products
  ];

  if (count === 0) {
    products.splice(products.findIndex(x => x.product === productId && x.size === size), 1);
  } else {
    products.find(x => x.product === productId && x.size === size).count = count;
  }

  return {
    ...state,
    products
  };
}

function clearCart(state, { }) {
  return {
    ...state,
    products: []
  };
}

const initialState = {
  products: []
};

export function cartReducer(state = initialState, action) {
  if (!action) return state;

  return handleMessage(state, action);
}