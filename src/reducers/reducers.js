const reducers = (state, action) => {
    if (state === undefined){
        state = {weeklyData: []}
    }
    switch (action.type) {
        case "LOAD": 
        return {
            ...state,
            weeklyData: action.data
        }
        default: 
        return state
    }
}
    
    export default reducers
