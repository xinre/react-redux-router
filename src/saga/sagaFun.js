import {
    takeEvery,
    put,
    call,
} from 'redux-saga/effects';
import {SAGAEXAMPLTTEST} from '../contantainer/sagaContant.js';
import {getSagaData} from '../action/sagaAction.js';

function* sendSaga(params){
    const e = params.sagaData+2;
    yield put(getSagaData({e}));
}

function* rootSaga(){
    yield takeEvery(SAGAEXAMPLTTEST,sendSaga);
}

export default rootSaga;