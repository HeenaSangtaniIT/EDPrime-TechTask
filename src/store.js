import { createStore,applyMiddleware,compose} from "redux";
import { persistStore,persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import sagas from "./sagas";
console.log("In store");
const persistConfig = {
    key: "root",
    storage,
}
const persistedReducer = persistReducer(persistConfig,reducers)
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware]
export function configureStore(initialState){
    const store = createStore(persistedReducer,initialState,compose(applyMiddleware(...middlewares)))
    let persistor = persistStore(store);
    sagaMiddleware.run(sagas);
    return{store, persistor};
}