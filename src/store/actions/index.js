const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const UPDATE_QUANTITY_TO_CART = 'UPDATE_QUANTITY_TO_CART';

export function addToCartMessage(product) {
  return buildMessage(ADD_TO_CART, { product });
}

export function removeFromCartMessage(productId) {
  return buildMessage(REMOVE_FROM_CART, { productId });
}

export function updateQuantityToCartMessage(productId, count) {
  return buildMessage(UPDATE_QUANTITY_TO_CART, { productId, count });
}

function buildMessage(type, payload) {
  return { type, payload };
}

const messageHandlers = {
  [ADD_TO_CART]: addToCart,
  [REMOVE_FROM_CART]: removeFromCart,
  [UPDATE_QUANTITY_TO_CART]: updateQuantityToCart
};

function handleMessage(state, { type, payload }) {
  const handler = messageHandlers[type];

  if (!handler) return state;

  return handler(state, payload);
}

function addToCart(state, { product }) {
  const products = [
    ...state.products
  ];

  if (!products.find(x => x.product === product.PathName)) {
    products.push({ product: product.PathName, count: 1 });
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

function updateQuantityToCart(state, { productId, count }) {
  const products = [
    ...state.products
  ];
  console.log('count', count);
  if (count === 0) {
    products.splice(products.findIndex(x => x.product === productId), 1);
  } else {
    products.find(x => x.product === productId).count = count;
  }

  return {
    ...state,
    products
  };
}

const initialState = {
  products: []
};

export function cartReducer(state = initialState, action) {
  if (!action) return state;

  return handleMessage(state, action);
}