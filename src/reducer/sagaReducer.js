import {GETSAGADATA} from '../contantainer/sagaContant.js';

const initState={
    data:0,
};

export default (state=initState,action) => {
    console.log(action.data)
    switch(action.type){
        case GETSAGADATA:
            return {
                ...state,
                data:action.datas,
            }
        default :
            return state;
    }
}