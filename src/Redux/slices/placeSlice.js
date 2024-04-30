import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../../src/axios/instance.js'

export const getPlace = createAsyncThunk('places/getAllPlaces', async () => {
    let places = await axios.get('/place/getAllPlaces')
    return places.data.places;
})

export const createPlace = createAsyncThunk('places/createPlace', async(data) => {

    const formData = new FormData();
    formData.append('place_name', data.place_name);
    formData.append('description', data.description);
    formData.append('neighborhood_overview', data.neighborhood_overview);
    formData.append('location', data.location);
    formData.append('property_type', data.property_type);
    formData.append('place_type', data.place_type);
    formData.append('room_type', data.room_type);
    formData.append('accommodates', data.accommodates);
    formData.append('bedrooms', data.bedrooms);
    formData.append('beds', data.beds);
    formData.append('amenities', data.amenities);
    formData.append('price', data.price);
    formData.append('has_availability', data.has_availability);
    formData.append('license', data.license);
    formData.append('instant_bookable', data.instant_bookable);
    formData.append('startDates', data.startDates);
    formData.append('endDates', data.endDates);

    Array.from(data.pictures_url).map((file, index) => {
        formData.append('pictures_url', file);
    });

    formData.append('imageCover', data.imageCover);

    // for (const entry of formData.entries()) {
    // console.log(entry[0], entry[1]);
    // }

    try {
        let newPlace = await axios.post('place/create-place', formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        });
        console.log(newPlace);
        return newPlace.data;
    } catch (error) {
        // alert(error.response.data);
        console.log(error);
    }
    
})

const placeSlice = createSlice({
    name : 'places',
    initialState : {
        count: 0,
        places : [],
        loading : true
    },
    reducers : {
        IncrementCounter (state, action) {
            // console.log('hello from increment reducer');
            state.count = action.payload
        },
        DescrementCounter : (state, action) => {
            console.log('hello from descrement reducer');
            state.count -= action.payload
        }
    },
    extraReducers : (builder)=>{
        builder
        .addCase(getPlace.fulfilled, (state, action)=> {
            console.log('fulfilled');
            state.loading = false
            state.places = action.payload
        })
        .addCase(getPlace.pending, (state)=> {
            console.log('pending..., loader');

        })
    }
})

export const {IncrementCounter, DescrementCounter} = placeSlice.actions;
export default placeSlice.reducer;
