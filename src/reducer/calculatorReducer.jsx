import React from 'react'

function calculatorReducer(state, action) {
    if (action.type === "SELECT_OPTION"){
        let { val } = action.payload;
        console.log(val)

        return {
            val: val
        }
    }

    return state

}

export default calculatorReducer