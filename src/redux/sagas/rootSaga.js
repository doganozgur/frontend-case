import { takeEvery } from "redux-saga/effects";
import { workGetItemsFetch } from "./handlers/items";
import { workGetCompaniesFetch } from "./handlers/companies";

export function* watcherSaga() {
  yield takeEvery("items/getItemsFetch", workGetItemsFetch);
  yield takeEvery("companies/getCompaniesFetch", workGetCompaniesFetch);
}
