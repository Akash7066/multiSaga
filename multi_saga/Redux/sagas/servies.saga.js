import axios from 'axios';
import { takeEvery, takeLatest, call, put } from 'redux-saga/effects';
import { doneServiesData, loadFail } from '../action';

function* fecthServiesData(props) {
	try {
		const user_data = yield call(apidata);
		yield put(doneServiesData(user_data));
	} catch (e) {
		yield put(loadFail(e));
	}
}

export function* waitForFetchServiesData() {
	yield takeEvery('GET_SERVIES_DATA', fecthServiesData);
}

//
var { NEXT_PUBLIC_API_URL } = process.env;

const apidata = async () => {
	var apiRecord = '';
	apiRecord = await axios.get(`${NEXT_PUBLIC_API_URL}/servies`);

	return apiRecord.data;
};
