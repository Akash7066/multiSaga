import axios from 'axios';
import { takeEvery, takeLatest, call, put } from 'redux-saga/effects';
import {  loadFail,doneServiesQuriesData } from '../action';

function* fecthSitePagesData(props) {
    console.log('from fetch api props is ',props)
    try {
        const user_data = yield call(apidata(props.payload[0]));
        yield put(doneServiesQuriesData(user_data));
    } catch (e) {
        yield put(loadFail(e));
    }
}

export function* waitForFetchServiesQuriesData() {
    yield takeEvery('GET_SERVIES_QURIES_DATA', fecthSitePagesData);
}

//
var { NEXT_PUBLIC_API_URL } = process.env;

const apidata = async(props) => {
    console.log("API ",props)
    var apiRecord = '';
    
    apiRecord =  axios.post(`${NEXT_PUBLIC_API_URL}/serviesquries`,{
        name:props.name,
        email:props.email,
        contactNum:props.contactNum,
        description:props.desc
    })
    .then(res=>{
    })
        return apiRecord.data;

};









