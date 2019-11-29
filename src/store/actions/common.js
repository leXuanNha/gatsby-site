const SHOW_LOADING = 'SHOW_LOADING';
const HIDE_LOADING = 'HIDE_LOADING';

export function showLoadingMessage() {
  return buildMessage(SHOW_LOADING, {});
}

export function hideLoadingMessage() {
  return buildMessage(HIDE_LOADING, {});
}

function buildMessage(type, payload) {
  return { type, payload };
}

const messageHandlers = {
  [SHOW_LOADING]: showLoading,
  [HIDE_LOADING]: hideLoading
}

function handleMessage(state, { type, payload }) {
  const handler = messageHandlers[type];

  if (!handler) return state;

  return handler(state, payload);
}

function showLoading(state, { }) {
  return {
    ...state,
    loading: true
  };
}

function hideLoading(state, { }) {
  return {
    ...state,
    loading: false
  };
}

const initialState = {
  loading: false
};

export function commonReducer(state = initialState, action) {
  if (!action) return state;

  return handleMessage(state, action);
}