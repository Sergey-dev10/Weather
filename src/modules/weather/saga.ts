import {call, put, takeEvery} from "redux-saga/effects";
import {weatherStart, weatherSuccess} from "./slice.ts";
import {getCurrentWeather, getForecastWeather} from "../../core/api";
function* weatherWorker({
  payload: { lat, lon },
}: {
  payload: { lat: number; lon: number };
}) {
    try {
        const current = yield call(getCurrentWeather, lat, lon);
        const forecast = yield call(getForecastWeather, lat, lon);
        yield put(weatherSuccess({ current, forecast }));
    } catch (e) {
        console.log(e);
    }
}

export function* weatherWatcher() {
  // @ts-ignore
    yield takeEvery(weatherStart.type, weatherWorker);
}
