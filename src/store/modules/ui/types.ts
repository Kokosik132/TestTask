export type BtnColors = '#D199E7' | '#72C1ED' | '#A196F1' | '#7D72ED';
export type ButtonText = 'First' | 'Second' | 'Third';

export interface UIState {
    buttons: ButtonState[]
}

export interface ButtonState {
    id: number;
    color: BtnColors;
    text: ButtonText;
}