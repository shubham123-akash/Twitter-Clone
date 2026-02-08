import {createSlice} from "@reduxjs/toolkit";
const userSlice = createSlice({
    name:"user",
    initialState:{
        user:null,
        otherUsers:null,
        profile:null
    },
    reducers:{
        getUser:(state,action)=>{
            state.user = action.payload;
        },
        getOtherUsers:(state,action)=>{
            state.otherUsers = action.payload;
        },
        getMyProfile:(state, action)=>{
            state.profile = action.payload;
        },
        followingUpdate:(state,action)=>{
            // unfollow
            if(state.user.following.includes(action.payload)){
                state.user.following = state.user.following.filter((itemId)=>{
                    return itemId === action.payload;
                })
            }else{
                // follow
                state.user.following.push(action.payload)
            }
        }
    }
});
export const {getUser,getOtherUsers,getMyProfile,followingUpdate} = userSlice.actions;
export default userSlice.reducer;





// What is this code for?
// This code defines a Redux slice called userSlice, which handles two things in the state:

// The current logged-in user

// Other users (like for a followers list)

// Want to update user data? Reducer does it.

// Want to clear the cart? Reducer handles it.

// Want to change theme or settings? Reducer updates the state.