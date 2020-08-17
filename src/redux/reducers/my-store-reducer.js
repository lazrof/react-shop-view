import * as actionTypes from '../actions/my-store/types';

const initialMyStoreState = {
    currentView:"productsView" // ordersView,
    
}

const myStoreReducer = (state = initialMyStoreState, action) => {

    switch (action.type) {

        case actionTypes.SET_DASHBOARD_VIEW:
        
            return {
                ...state,
                currentView:action.payload
            };

        default:
            return state;
    }
};

export default myStoreReducer;