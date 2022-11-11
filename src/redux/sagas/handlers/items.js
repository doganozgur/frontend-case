import { call, put } from "redux-saga/effects";
import { requestGetItems } from "../requests/items";
import { getItemsSuccess } from "../../features/itemsSlice";

export function* workGetItemsFetch() {
  try {
    const response = yield call(requestGetItems);
    const { data } = response;
    yield put(getItemsSuccess({ ...data }));
  } catch (error) {
    console.log(error);
  }
}
