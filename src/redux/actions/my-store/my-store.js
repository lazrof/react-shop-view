import * as actionTypes from './types';

export const setDashboardView = (dashboardView) => {

    return {
        type: actionTypes.SET_DASHBOARD_VIEW,
        payload: dashboardView
    }
}