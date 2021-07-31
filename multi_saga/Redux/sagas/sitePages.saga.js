import axios from 'axios';
import { takeEvery, takeLatest, call, put } from 'redux-saga/effects';
import { doneSitePageData, loadFail } from '../action';

function* fecthSitePagesData(props) {
    try {
        const user_data = yield call(apidata);
        yield put(doneSitePageData(user_data));
    } catch (e) {
        yield put(loadFail(e));
    }
}

export function* waitForFetchSitePagesData() {
    yield takeEvery('GET_SERVIES_DATA', fecthSitePagesData);
}

//
var { NEXT_PUBLIC_API_URL } = process.env;

const apidata = async() => {
    var apiRecord = '';
    apiRecord = await axios.get(`${NEXT_PUBLIC_API_URL}/site-pages`);

    return apiRecord.data;
};