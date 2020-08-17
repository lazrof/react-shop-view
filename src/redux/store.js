import { createStore, combineReducers} from "redux";
import  myStoreReducer from './reducers/my-store-reducer';
// import  postReducer from './reducers/post-reducer';

const rootReducer = combineReducers({
    myStoreReducer
});

const store = createStore(rootReducer);

export default store;