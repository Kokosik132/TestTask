import { buttonColors } from './../../../constants/constants';
import { createSlice } from '@reduxjs/toolkit';

import { UIState } from './types';

const initialState: UIState = {
  buttons: [
    { id: 1, color: '#D199E7', text: 'First' },
    { id: 2, color: '#D199E7', text: 'Second' },
    { id: 3, color: '#D199E7', text: 'Third' },
  ],
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    changeColor: (state, { payload }) => {
      console.log(payload, 'payload');
      state.buttons = state.buttons.map((item) => {
        let color = item.color;
        if (item.id === payload.id) {
          buttonColors.forEach((el, index) => {
            if (item.color === el) {
              if (index === buttonColors.length - 1) {
                color = buttonColors[0];
              } else {
                color = buttonColors[index + 1];
              }
            }
          });
        }
        return { ...item, color };
      });
    },
  },
});

export const uiReducer = uiSlice.reducer;
export const { changeColor } = uiSlice.actions;
