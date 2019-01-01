// import * as types from '../contantainer/actionTypes.js';
import {SAGAEXAMPLTTEST,GETSAGADATA} from '../contantainer/sagaContant.js';

export function sendSagaData(){
    return {
        type:SAGAEXAMPLTTEST,
        sagaData:6,
    }
}
export function getSagaData(result){
    return {
        type:GETSAGADATA,
        datas:result.e
    }
}