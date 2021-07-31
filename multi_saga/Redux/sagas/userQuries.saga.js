import axios from 'axios';
import { takeEvery, takeLatest, call, put } from 'redux-saga/effects';
import { doneUserQuriesData, loadFail } from '../action';

function* fecthSitePagesData(props) {
    try {
        const user_data = yield call(apidata(props.payload[0]));
        yield put(doneUserQuriesData(user_data));
    } catch (e) {
        yield put(loadFail(e));
    }
}

export function* waitForFetchUserQuriesData() {
    yield takeEvery('GET_USER_QURIES_DATA', fecthSitePagesData);
}

//
var { NEXT_PUBLIC_API_URL } = process.env;

const apidata = async(props) => {
    var apiRecord = '';
    
    apiRecord =  axios.post(`${NEXT_PUBLIC_API_URL}/usersquries`,{
        name:props.name,
        email:props.email,
        subject:props.subject,
        message:props.message
    })
    .then(res=>{
    })
        return apiRecord.data;

};









