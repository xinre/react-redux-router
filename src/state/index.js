import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducer/rootReducer.js';
import {
    syncHistoryWithStore,
    routerMiddleware,
  } from "react-router-redux";
  import createHistory from "history/createBrowserHistory";
  import rootSaga from '../saga/sagaFun.js';
  import createSagaMiddleware from 'redux-saga';

  // const middleware = routerMiddleware(history);
  export const history = createHistory();
  const sagaMiddleware = createSagaMiddleware();

  export const store = createStore(
    rootReducer,
    applyMiddleware(
        // middleware,
        routerMiddleware(history),
        sagaMiddleware,
    )
  )
  // export const history = syncHistoryWithStore(createHistory(),store);
  sagaMiddleware.run(rootSaga)

  export default store;