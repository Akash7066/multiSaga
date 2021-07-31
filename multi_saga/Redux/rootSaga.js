import { all } from 'redux-saga/effects';
import { waitForFetchCaseStudyData } from '../Redux/sagas/caseStudy.saga';
import { waitForFetchServiesData } from '../Redux/sagas/servies.saga';
import { waitForFetchSideInfoData } from '../Redux/sagas/sideInfo.saga';
import {waitForFetchContactData} from '../Redux/sagas/contact.saga'
import { waitForFetchSitePagesData} from '../Redux/sagas/sitePages.saga'
import {waitForFetchUserQuriesData} from '../Redux/sagas/userQuries.saga'
import {waitForFetchServiesQuriesData} from '../Redux/sagas/serviesQuries.saga'
export default function* rootSaga() {
	yield all([ waitForFetchCaseStudyData(), waitForFetchServiesData(), waitForFetchSideInfoData(), waitForFetchContactData(), waitForFetchSitePagesData(), waitForFetchUserQuriesData(),waitForFetchServiesQuriesData() ]);
}
