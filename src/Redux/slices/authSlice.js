import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios/instance";

// Login user
export const authUser = createAsyncThunk('authUser/login', async (data, thunkAPI)=> {
    let {email, password, role} = data;
    try {
        let auth = await axios.post(`/${role}s/login`, {
            email,
            password
        })
        return auth.data
    } catch (error) {
        console.log(error.response.data);
        return thunkAPI.rejectWithValue(error.response.data);
    }
})

//  Register user
export const registerUser = createAsyncThunk('authUser/register', async(userData, thunkAPI)=> {
    try {
        let {guest_name, email, password, passwordConfirm} = userData
        let response = await axios.post('/guests/signup', {
            guest_name,
            email, 
            password, 
            passwordConfirm
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.errors)
    }
})

// Get Current User
export const currentUser = createAsyncThunk('authUser/user', async ()=> {
    const getRole = localStorage.getItem('role');
    if (getRole) {
        try {
            let response = await axios.get(`/${getRole}s/user`)
            return response.data
        } catch (error) {
            return error.response
        }
    }
})

const authSlice = createSlice({
    name : 'authUser',
    initialState: {
        curruntUser : undefined,
        roleUser : undefined,
        loading : false,
        isLogged : false,
        err : false,
        errorMessage: null
    },
    reducers: {
        LogedOut (state) {
            state.curruntUser = undefined
            state.isLogged = false
        },

    },
    extraReducers: (builder =>{
        builder
        .addCase(authUser.pending, (state) => {
            state.loading = true;
            console.log('Pending');
        })
        .addCase(authUser.fulfilled, (state, action) => {
            state.isLogged= true;
            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('role', action.payload.data.user.role);
            // Role for user
            state.roleUser = action.payload.data.user.role
            state.loading = false;
        })
        .addCase(authUser.rejected, (state, action) => {
            console.log('rejected from login');
            state.loading = false;
            state.err = true;
            state.isLogged = false;
            state.catchError = action.payload
        })

        // Registration State
        .addCase(registerUser.pending, (state) => {
            console.log('pending');
            state.loading = true;
        })
        .addCase(registerUser.fulfilled, (state) => {
            console.log('action.payload');
            state.loading = false;
            state.isLogged = true;
        })
        .addCase(registerUser.rejected, (state) => {
            console.log('rejected');
            state.loading = false;
            state.err = true;
            state.isLogged = false;
        })

        // Current User
        .addCase(currentUser.pending, (state) => {
            state.loading = true;
        })
        .addCase(currentUser.fulfilled, (state, action) => {
            if (action.payload) {
                // save current user
                state.curruntUser = action.payload.currentUser;
                // Role for user
                state.roleUser = action.payload.currentUser.role
                // stop loader after fetching data
                state.loading = false;
                //set logged true
                state.isLogged = true;
            }
        })
        .addCase(currentUser.rejected, (state, action) => {
            console.log('rejected from current user');
            state.loading = false;
            state.err = true;
            state.isLogged = false;
            // state.errorMessage =action.payload.data.message;
        });
    })
})


export const {LogedOut} = authSlice.actions

export default authSlice.reducer;