import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import { GetALLPodcastData } from '../../Models/PodcastModel';

interface PodcastState {
  podcastData: Array<GetALLPodcastData>;
  refress: boolean
  wishList: Array<GetALLPodcastData>
}

const initialState: PodcastState = {
    podcastData: [],
    wishList:[],
    refress: false
};

export const PodcastSlice = createSlice({
  name: 'podcast',
  initialState,
  reducers: {
    initPodcast(state, action: PayloadAction<Array<GetALLPodcastData>>) {
      state.podcastData = action.payload;
    },
    setWishList(state,action: PayloadAction<Array<GetALLPodcastData>>) {
      state.wishList = action.payload
    },
    updateWishlist(state, action: PayloadAction<any>){
      console.log('payload',action.payload)
      let index = state.podcastData.findIndex(it => it._id == action.payload.Id);
      console.log(">>>>>>>PodacstIndex",index);

      if(index >= 0){
          console.log('sfsf.>>>>>>>>>')
          state.podcastData[index].wishlistCount = 1
          state.refress = !state.refress
      }
  },
    deletedWishList(state, action:PayloadAction<any>){
      state.wishList = state.wishList.filter((it)=>it._id != action.payload)
      console.log('payload',action.payload)
      let index = state.podcastData.findIndex(it => it._id == action.payload);
      console.log(">>>>>>>PodacstIndex",index);

      if(index >= 0){
          console.log('sfsf.>>>>>>>>>')
          state.podcastData[index].wishlistCount = 0
          state.refress = !state.refress
      }
  },
  },
});
export const {initPodcast,setWishList,deletedWishList, updateWishlist} = PodcastSlice.actions;

export default PodcastSlice.reducer;
