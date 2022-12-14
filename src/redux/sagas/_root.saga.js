import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import gardenSaga from './garden.saga';
import weatherSaga from './weather.saga';
import tasksSaga from './tasks.saga';
import tipsSaga from './tips.saga';

export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    gardenSaga(),
    weatherSaga(),
    tasksSaga(),
    tipsSaga(),
  ]);
}
