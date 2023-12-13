import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

const LeetCodereducer = (state = initialState,action)=>{
    switch(action.type){
        case 'ADD':
            break
        case 'REMOVE':
            break
    }
    return state;
}



module.exports = [
    LeetCodereducer
]





// export const { increment, decrement, incrementByAmount } = counterSlice.actions

// export default counterSlice.reducer;




// export const LCproblemcount = createSlice({
//   name: 'LCproblemcount',
//   initialState,
//   reducers: {
//     increment: (state) => {
//       state.value += 1
//     },
//     decrement: (state) => {
//       state.value -= 1
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload
//     },
//   },
// })