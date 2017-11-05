
export default (state=null, action) => {
    switch(action.type) {
        case 'GET_CHALLENGES':
            return action.payload;
        default:
            return state; 
    }
}