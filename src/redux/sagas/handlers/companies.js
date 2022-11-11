import { call, put } from "redux-saga/effects";
import { getCompaniesSuccess } from "../../features/companiesSlice";
import { requestGetCompanies } from "../requests/companies";

export function* workGetCompaniesFetch() {
  try {
    const response = yield call(requestGetCompanies);
    const { data } = response;
    yield put(getCompaniesSuccess({ ...data }));
  } catch (error) {
    console.log(error);
  }
}
