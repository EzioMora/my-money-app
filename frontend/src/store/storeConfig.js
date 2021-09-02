import { createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as formReducer } from "redux-form";
import { reducer as toastrReducer } from "react-redux-toastr";

import promise from "redux-promise";
import multi from "redux-multi";
import thunk from "redux-thunk";

import DashboardReducer from "./reducers/dashboard";
import TabsReducer from "./reducers/tabs";
import BillingCycleReducer from "./reducers/billingCycle";

const reducers = combineReducers({
  dashboard: DashboardReducer,
  tab: TabsReducer,
  billingCycle: BillingCycleReducer,
  form: formReducer,
  toastr: toastrReducer,
});

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const storeConfig = () =>
  applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools);

export default storeConfig;
