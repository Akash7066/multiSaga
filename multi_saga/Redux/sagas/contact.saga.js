import axios from 'axios';
import { takeEvery, takeLatest, call, put } from 'redux-saga/effects';
import { doneContactData , loadFail } from '../action';

function* fecthContactData(props) {
	try {
		const user_data = yield call(apidata);
		yield put(doneContactData(user_data));
	} catch (e) {
		yield put(loadFail(e));
	}
}

export function* waitForFetchContactData() {
	yield takeEvery('GET_SERVIES_DATA', fecthContactData);
}

//
var { NEXT_PUBLIC_API_URL } = process.env;

const apidata = async () => {
	var apiRecord = '';
	apiRecord = await axios.get(`${NEXT_PUBLIC_API_URL}/contact-info`);

	return apiRecord.data;
};
