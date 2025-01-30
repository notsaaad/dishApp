import {
    createSlice
} from '@reduxjs/toolkit'

const initialState = []



export const cartSlice = createSlice({
            name: 'cart',
            initialState,
            reducers: {
                AddToCart: (state, action) => {
                    let item = state.filter((el) => el.id == action.payload.id);
                    
                   if(item.length === 0){
                    state = state.push(action.payload)
                   }
                    
                },
                RemoveFromCart: (state, action) => {
                    state.splice(
                        state.findIndex((el)=> el.id === action.payload.id),1
                    )
                },
                ClearCart: (state, action) => {
                    initialState;
                },
                EditItem: (state, action) => {
                    let item = state.filter((el) => el.id == action.payload.id);
                    if (item.length !== 0) {
                        if (action.payload.type === 'INC' && item[0].quantity >= 1) {
                            item[0].quantity += 1;
                        } else if (action.payload.type === 'DEC' && item[0].quantity !== 1) {
                            item[0].quantity -= 1;
                        } else if (action.payload.type === 'DEC' && item[0].quantity == 1) {
                            state = state.filter((el) => el.id !== action.payload.id)
                        }
                    } else if (!item.length === 0 && action.payload.type === 'INC'){
                        state = state.push(action.payload.item)
                    }

                }

            }});

        // Action creators are generated for each case reducer function
        export const {
            AddToCart,
            RemoveFromCart,
            ClearCart,
            EditItem
        } = cartSlice.actions

        export default cartSlice.reducer