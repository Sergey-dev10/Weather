import { call, put, takeEvery } from "redux-saga/effects";
import { weatherStart } from "./actions.ts";
import { weatherSuccess } from "./slice.ts";
import { getWeather } from "../../core/api";
function* weatherWorker({
  payload: { lat, lon },
}: {
  payload: { lat: number; lon: number };
}) {
  try {
    const weather = yield call(getWeather, lat, lon);
    yield put(
      weatherSuccess({
        current: weather.current,
        forecast: { hourly: weather.hourly, daily: weather.daily },
      }),
    );
  } catch (e) {
    console.log(e);
  }
}

export function* weatherWatcher() {
  // @ts-ignore
  yield takeEvery(weatherStart.type, weatherWorker);
}
