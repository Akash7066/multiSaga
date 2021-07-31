import { createStore, combineReducers, applyMiddleware } from 'redux';
import caseReducer from './Reducers/caseStudyReducer';
import ServiesReducer from './Reducers/serviesReducer';
import createSagaMiddelware from 'redux-saga';
import rootSaga from './rootSaga'
import SideInfo from './Reducers/sideInfoReducer'
import Contact from './Reducers/contactDetails'
import SitePage from './Reducers/sitePagesDetails'
import UserQuries from './Reducers/userQuries'
import ServiesQuries from './Reducers/serviesQuries'

const sagaMiddelware = createSagaMiddelware();

const commonData = {
    user: {}
};

const rootReducer = combineReducers({
    data: caseReducer,
    servies: ServiesReducer,
    sideInfo: SideInfo,
    contact: Contact,
    sitePage: SitePage,
    userQuries: UserQuries,
    serviesQuries: ServiesQuries

});

const store = createStore(rootReducer, commonData, applyMiddleware(sagaMiddelware));
sagaMiddelware.run(rootSaga);

export default store;