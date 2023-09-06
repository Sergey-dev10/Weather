import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import {combineReducers} from "@reduxjs/toolkit";
import {all} from "redux-saga/effects";
import searchReducer from "./search/slice";
import {searchWatcher} from "./search/saga.ts";

const rootReducer = combineReducers({
    search: searchReducer,
});
const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    yield all([
        searchWatcher(),
    ]);
}
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;