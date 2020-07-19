import { initialStateStatistics } from "./statistics-initial-state";
import { STATISTICS_SEND_REQUEST, STATISTICS_SUCCESS_REQUEST, STATISTICS_FAILED_REQUEST } from "./statistics-actions";



export const statisticsReducer = (state = initialStateStatistics, action) => {
    switch (action.type) {
        case STATISTICS_SEND_REQUEST:
            return {
                ...state,
                loading: true
            }
        case STATISTICS_SUCCESS_REQUEST:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ''
            }
        case STATISTICS_FAILED_REQUEST:
            return {
                ...state,
                loading: false,
                error: action.payload,
                data: []
            }

        default:
            return state;
    }
}
