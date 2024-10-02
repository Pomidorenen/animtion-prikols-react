import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
export const fetchWeather = createAsyncThunk(
    'user/fetchWeather',
    async function () {
        const response = await fetch('/api/weather');
        return await response.json();
    }
)

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        data:{},
        loading: false,
        error: null,
        update:Date.now()
    },
    reducers:{

    },
    extraReducers:(builder) => {
        builder.addCase(fetchWeather.pending,(state,action)=>{
            state.loading = true;
            state.data = action.payload;
        });
        builder.addCase(fetchWeather.rejected,(state,action)=>{
            state.loading=false;
            state.error = action.payload;
        });
        builder.addCase(fetchWeather.fulfilled,(state,action)=>{
            state.loading = false;
            state.data = action.payload;
        })
    }
})

export default weatherSlice.reducer;