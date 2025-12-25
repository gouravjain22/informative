import { FETCH_DATA_REQUEST, SELECTED_OPTION_TYPE } from "./const";

export const fetchData = (value) => {
  return {
    type: FETCH_DATA_REQUEST,
    payload: value,
  };
};

