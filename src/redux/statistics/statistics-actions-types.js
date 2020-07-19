import axios from 'axios';
import { STATISTICS_SEND_REQUEST, STATISTICS_SUCCESS_REQUEST, STATISTICS_FAILED_REQUEST } from './statistics-actions';
import httpApi from '../../utils/api.json';


export function sendStatisticRequest() {
    return {
        type: STATISTICS_SEND_REQUEST
    }
}

export function successStatisticsRequest(statisticsData) {
    return {
        type: STATISTICS_SUCCESS_REQUEST,
        payload: statisticsData
    }
}

export function failedStatisticsRequest(errorMsg) {
    return {
        type: STATISTICS_FAILED_REQUEST,
        payload: errorMsg
    }
}


//getFetch

export function getStatisticData() {
    return function (dispatch) {
        dispatch(sendStatisticRequest())
        axios.get(httpApi["statistics-Api"]).then((response) => {
            const { data } = response
            dispatch(successStatisticsRequest(data.response.slice(0, 100)))
        }).catch(error => {
            dispatch(failedStatisticsRequest(error.message))
        })
    }
}