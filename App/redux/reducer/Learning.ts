import {createSlice, PayloadAction} from '@reduxjs/toolkit';



interface LearningState {
  learningData: Array<any>;
  refress: boolean
  bookmark: Array<any>
}

const initialState: LearningState = {
    learningData: [],
    bookmark:[],
    refress: false
};

export const LearningSlice = createSlice({
  name: 'learning',
  initialState,
  reducers: {
    initLearning(state, action: PayloadAction<Array<any>>) {
      state.learningData = action.payload;
    },
    setBookmark(state,action: PayloadAction<Array<any>>) {
      state.bookmark = action.payload
    },
    deletedBookmark(state, action:PayloadAction<any>){
      state.bookmark = state.bookmark.filter((it)=>it._id != action.payload)
  },
  },
});
export const {initLearning,setBookmark,deletedBookmark} = LearningSlice.actions;

export default LearningSlice.reducer;
