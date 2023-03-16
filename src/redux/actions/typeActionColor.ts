export enum ActionTypes {
  CHANGE_COLOR_FB = 'CHANGE_COLOR_FB',
  CHANGE_COLOR_SB = 'CHANGE_COLOR_SB',
  CHANGE_COLOR_TB = 'CHANGE_COLOR_TB',
}

export type Action2<T, P> = {type: T; payload: P};

export type ChangeColorType = Action2<
  | ActionTypes.CHANGE_COLOR_FB
  | ActionTypes.CHANGE_COLOR_SB
  | ActionTypes.CHANGE_COLOR_TB,
  number
>;
export const changeColorFirst = (payload: number): ChangeColorType => ({
  type: ActionTypes.CHANGE_COLOR_FB,
  payload,
});

export const changeColorSecond = (payload: number): ChangeColorType => ({
  type: ActionTypes.CHANGE_COLOR_SB,
  payload,
});

export const changeColorThird = (payload: number): ChangeColorType => ({
  type: ActionTypes.CHANGE_COLOR_TB,
  payload,
});
