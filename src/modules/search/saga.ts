import { call, put, takeEvery } from "redux-saga/effects";
import { searchStart, searchSuccess, failedSearch } from "./slice";
import {getPlaces} from "../../core/api";

function* searchWorker({ payload }: { payload: string } ): any {
    try {
        const result = yield call(getPlaces, payload);
        yield put(searchSuccess(result));
    } catch (e) {
        console.log(e);
        yield put(failedSearch());
    }
}

export function* searchWatcher() {
    // @ts-ignore
    yield takeEvery(searchStart.type, searchWorker);
}

