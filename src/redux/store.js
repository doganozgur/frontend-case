import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../redux/features/basketSlice";
import filterReducer from "../redux/features/filterSlice";
import itemsReducer from "../redux/features/itemsSlice";
import companiesReducer from "../redux/features/companiesSlice";
import createSagaMiddleware from "@redux-saga/core";
import { watcherSaga } from "./sagas/rootSaga";

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    filter: filterReducer,
    items: itemsReducer,
    companies: companiesReducer,
  },
  middleware: [saga],
});

saga.run(watcherSaga);
