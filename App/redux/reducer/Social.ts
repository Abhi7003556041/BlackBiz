import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PostResponseData} from '../../Models/SocialModel';

interface SocialState {
  socialdata: Array<PostResponseData>;
  refress: boolean;
}

const initialState: SocialState = {
  socialdata: [],
  refress: false,
};

export const SocialSlice = createSlice({
  name: 'social',
  initialState,
  reducers: {
    initSocial(state, action: PayloadAction<Array<PostResponseData>>) {
      console.log('payloadSocial>>', action.payload);
      state.socialdata = action.payload;
    },
    updateLike(state, action: PayloadAction<any>) {
      let index = state.socialdata.findIndex(
        it => it._id == action.payload.postId,
      );
      if (index >= 0) {
        let likeIndex = state.socialdata[index].likes.findIndex(
          it => it?.userData?._id == action.payload.likeData.userData._id,
        );
        if (likeIndex >= 0) {
            state.socialdata[index].likes.splice(likeIndex, 1);
            state.socialdata[index].likes = state.socialdata[index].likes;
            state.socialdata[index].selfLike = 0;
        } else {
            state.socialdata[index].likes = [
              ...state.socialdata[index].likes,
              action.payload.likeData,
            ];
            state.socialdata[index].selfLike = 1;
        }
        state.socialdata[index].selfLike = state.socialdata[index].selfLike;
        state.refress = !state.refress;
      }
    },
    updateComment(state, action: PayloadAction<any>) {
      console.log('payload', action.payload);
      let index = state.socialdata.findIndex(it => it._id == action.payload.Id);
      console.log('>>>>>>>SocailtIndex', index);

      if (index >= 0) {
        console.log('sfsf.>>>>>>>>>');
        state.socialdata[index].comments = [
          ...state.socialdata[index].comments,
          action.payload.commentData,
        ];
        console.log('sfsf.data>>>>>>>>>', JSON.stringify(state.socialdata));
        state.socialdata = state.socialdata;
        state.refress = !state.refress;
      }
    },
    deletedComment(state, action: PayloadAction<any>) {
      console.log('payload', action.payload);
      let index = state.socialdata.findIndex(it => it._id == action.payload.Id);
      console.log('>>>>>>>SocailtIndexdelel', index);

      if (index >= 0) {
        console.log('sfsf.delele>>>>>>>>>');
        state.socialdata[index].comments = state.socialdata[
          index
        ].comments.filter(it => it._id != action.payload.cId);
        console.log(
          'sfsf.datadeleteeee>>>>>>>>>',
          JSON.stringify(state.socialdata),
        );
        state.socialdata = state.socialdata;
        state.refress = !state.refress;
      }
    },
    deletePostSingle(state, action: PayloadAction<any>) {
      console.log('payload', action.payload);
      state.socialdata = state.socialdata.filter(
        it => it._id != action.payload.Id,
      );
    },
  },
});
export const {
  initSocial,
  updateLike,
  updateComment,
  deletedComment,
  deletePostSingle,
} = SocialSlice.actions;

export default SocialSlice.reducer;
