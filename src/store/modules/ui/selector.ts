import { UIState } from './types';
import { createSelector, Selector } from "@reduxjs/toolkit";
import { RootState } from "~/store";

const selectUIState: Selector<RootState, UIState> = state => state.ui;

export const selectButtons = createSelector(selectUIState, state => state.buttons);