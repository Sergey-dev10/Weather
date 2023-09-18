import { call, put, takeEvery } from "redux-saga/effects";
import { searchSuccess } from "./slice";
import { searchStart } from "./actions";
import { getPlaces } from "../../core/api";

function* searchWorker({ payload }: { payload: string }) {
  try {
    const result = yield call(getPlaces, payload);
    yield put(searchSuccess(result));
  } catch (e) {
    console.log(e);
  }
}

export function* searchWatcher() {
  // @ts-ignore
  yield takeEvery(searchStart.type, searchWorker);
}
