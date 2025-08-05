import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: 0 }

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    },
    incrementByAmount(state, action) {
      state.value += action.payload
    },
    multiply: (state)=>{
        state.value *= 2
    }
  },
})

export const { increment, decrement, incrementByAmount, multiply } = counterSlice.actions
export default counterSlice.reducer
