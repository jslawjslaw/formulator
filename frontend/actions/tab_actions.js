export const RECEIVE_INDEX = "RECEIVE_INDEX";

export const receiveTabIndex = index => {
  return {
    type: RECEIVE_INDEX,
    index
  };
};

export function changeTabIndex(index) {
  return (dispatch) => {
    dispatch(receiveTabIndex(index));
  };
}
