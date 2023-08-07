import { put, spawn, takeLatest } from "redux-saga/effects";
import { getSkills, getSkill } from "../api";
import {
    skillsFailure,
    skillsSuccess,
    skillFailure,
    skillSuccess,
} from '../actions/actionCreators';
import { SKILL_REQUEST, SKILLS_REQUEST } from "../actions/actionTypes";

function* handleSkillsSaga() {
    try {
      const data = yield getSkills();     
      yield put(skillsSuccess(data))
    } catch (e) {
      yield put(skillsFailure(e.message))
    }
}

function* handleSkillSaga(action) {
  try {
    const data = yield getSkill()   
    yield put(skillSuccess(data))
  } catch (e) {
    yield put(skillFailure(e.message))
  }
}

function* watchSkillsSaga() {
    yield takeLatest(SKILLS_REQUEST, handleSkillsSaga)
}

function* watchSkillSaga() {
  yield takeLatest(SKILL_REQUEST, handleSkillSaga)
}

export default function* saga() {
    yield spawn(watchSkillsSaga)
    yield spawn(watchSkillSaga)   
}