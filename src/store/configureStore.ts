import { applyMiddleware, createStore, Middleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';

const bindMiddleware = (middleware: Middleware[]) => {
    if (process.env.NODE_ENV !== "production") {
        const { composeWithDevTools } = require("redux-devtools-extension");
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware as Middleware[]);
};

const persistConfig = {
    key: "nextjs",
    whitelist: ["application"], // only reducer will be persisted, add other reducers if needed
    storage, // if needed, use a safer storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
    const store = createStore(
        persistedReducer,
        bindMiddleware([thunkMiddleware])
    );

    const persistor = persistStore(store);

    return { store, persistor };
};

export default configureStore;
