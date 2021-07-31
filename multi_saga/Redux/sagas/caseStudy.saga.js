import axios from 'axios';
import { takeEvery, takeLatest, call, put } from 'redux-saga/effects';
import { doneData, loadFail } from '../action';

//

var casesStydyAPI = process.env.API_DATA;
//

function* fecthCaseStudyData(props) {
	try {
		const user_data = yield call(apidata);
		yield put(doneData(user_data));
	} catch (e) {
		yield put(loadFail(e));
	}
}

export function* waitForFetchCaseStudyData() {
	yield takeEvery('GET_DATA', fecthCaseStudyData);
}

//
var { NEXT_PUBLIC_API_URL } = process.env;
console.log('the api is ',NEXT_PUBLIC_API_URL)
//

const apidata = async () => {
	var apiRecord = '';

	apiRecord = await axios.get(`${NEXT_PUBLIC_API_URL}/cases`);

	return apiRecord.data;
};
