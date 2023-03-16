import {ActionTypes} from '../actions/typeActionColor';

export type Initial = {
  numberFirstBtn: number;
  numberSecondBtn: number;
  numberThirdBtn: number;
  defaultColor: string[];
  colorFirstBtn: string;
  colorSecondBtn: string;
  colorThirdBtn: string;
};
const user: Initial = {
  numberFirstBtn: 0,
  numberSecondBtn: 0,
  numberThirdBtn: 0,
  defaultColor: ['#D199E7', '#72C1ED', '#A196F1', '#7D72ED'],
  colorFirstBtn: '',
  colorSecondBtn: '',
  colorThirdBtn: '',
};
export const stateColorReducer = (
  state = user,
  action: any,
): Initial | undefined => {
  switch (action.type) {
    case ActionTypes.CHANGE_COLOR_FB:
      let numberColor = action.payload;
      const count = state.numberFirstBtn;
      if (count + numberColor === 4) {
        return {
          ...state,
          numberFirstBtn: 0,
          colorFirstBtn: state.defaultColor[count],
        };
      }
      if (count + numberColor < 4) {
        return {
          ...state,
          numberFirstBtn: count + numberColor,
          colorFirstBtn: state.defaultColor[count],
        };
      }
      break;
    case ActionTypes.CHANGE_COLOR_SB:
      console.log(action.payload, 'action.payload');
      let numberClr = action.payload;
      const countF = state.numberSecondBtn;
      if (countF + numberClr === 4) {
        return {
          ...state,
          numberSecondBtn: 0,
          colorSecondBtn: state.defaultColor[countF],
        };
      }
      if (countF + numberClr < 4) {
        console.log(countF, 'countF');
        return {
          ...state,
          numberSecondBtn: countF + numberClr,
          colorSecondBtn: state.defaultColor[countF],
        };
      }
      break;
    case ActionTypes.CHANGE_COLOR_TB:
      let numberClrB = action.payload;
      const countT = state.numberThirdBtn;
      if (countT + numberClrB === 4) {
        return {
          ...state,
          numberThirdBtn: 0,
          colorThirdBtn: state.defaultColor[countT],
        };
      }
      if (countT + numberClrB < 4) {
        return {
          ...state,
          numberThirdBtn: countT + numberClrB,
          colorThirdBtn: state.defaultColor[countT],
        };
      }
      break;

    default:
      return state;
  }
};
