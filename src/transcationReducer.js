const transactionReducer = ((state,action)=>{
    switch(action.type){
        case "Add_transcation":
            return[action.payload, ...state]
        default:
            return state
    }
})
export default transactionReducer;
