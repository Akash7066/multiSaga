import axios from 'axios';
import { takeEvery, takeLatest, call, put } from 'redux-saga/effects';
import { doneServiesData, loadFail, doneSideInfoData } from '../action';

function* fecthServiesData(props) {
	try {
		const user_data = yield call(apidata);
		yield put(doneSideInfoData(user_data));
	} catch (e) {
		yield put(loadFail(e));
	}
}

export function* waitForFetchSideInfoData() {
	yield takeLatest('GET_SITE_INFO_DATA', fecthServiesData);
}

//
var { NEXT_PUBLIC_API_URL } = process.env;

const apidata = async () => {
	var apiRecord = '';
	apiRecord = await axios.get(`${NEXT_PUBLIC_API_URL}/site-info`);

	return apiRecord.data;
};
