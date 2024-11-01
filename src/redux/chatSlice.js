import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "chat",
    initialState:{
        messages :[]
    },
    reducers:{
        addMessage:(state,messageFromChat)=>{
             state.messages.push(messageFromChat.payload)
        }
    }
})

export const {addMessage} = chatSlice.actions
export default chatSlice.reducer