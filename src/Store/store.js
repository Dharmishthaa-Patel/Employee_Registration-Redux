import { createStore } from "redux";
import rootReducer from "../Reducer/index"

const store = createStore (rootReducer,
                window._REDUX_DEVTOOLS_EXTENSION_ && Window._REDUX_DEVTOOLS_EXTENSION_());

export default store;