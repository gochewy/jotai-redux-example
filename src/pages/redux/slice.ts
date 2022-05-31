import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import _ from "lodash";
import { GetContentQuery } from "../../generated/graphql";
import getSdk from "../../lib/sdk/getSdk";

interface WidgetState {
  id: number;
  quantity: number;
}

interface State {
  content: GetContentQuery | undefined;
  interest: number;
  widgetStates: {
    [key: number]: WidgetState;
  };
}

const initialState: State = {
  content: undefined,
  interest: 1,
  widgetStates: {},
};

const getContent = createAsyncThunk("pages/redux/getContent", async () =>
  getSdk().GetContent()
);

const slice = createSlice({
  name: "pages/redux",
  initialState,
  reducers: {
    setInterest: (state, action: PayloadAction<number>) => {
      state.interest = _.clamp(action.payload, 1, 5);
    },
    increaseWidgetQuantity: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const current = state.widgetStates[id]?.quantity;
      if(typeof current === 'number'){
        state.widgetStates[id].quantity = current + 1;
      }
      else {
        state.widgetStates[id] = {
          id,
          quantity: 1
        }
      }
    },
    decreaseWidgetQuantity: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const current = state.widgetStates[id]?.quantity;
      if(typeof current === 'number'){
        if(current <= 0){
          return;
        }
        state.widgetStates[id].quantity = current - 1;
      }
      else {
        state.widgetStates[id] = {
          id,
          quantity: 0
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getContent.fulfilled, (state, action) => {
      state.content = action.payload;
    });
  },
});

export const actions = {
  ...slice.actions,
  getContent,
};

export default slice;
