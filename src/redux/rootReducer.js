import { combineReducers } from 'redux';
import dataReducer from './Data/reducer'; // Import the dataReducer we defined earlier

// Combine all the individual reducers
const rootReducer = combineReducers({
  data: dataReducer, // Your reducer for handling data state
  // Add other reducers here as your app grows
});

export default rootReducer;