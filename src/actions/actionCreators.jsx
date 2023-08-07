import {
    SKILLS_SUCCESS,
    SKILLS_REQUEST,
    SKILLS_FAILURE,
    SKILL_REQUEST,
    SKILL_SUCCESS,
    SKILL_FAILURE,
   
} from './actionTypes'

export function skillsRequest() {
    return { type: SKILLS_REQUEST}
}

export function skillsSuccess(items) {
    return { type: SKILLS_SUCCESS, payload: { items } }
}

export function skillsFailure(error) {
    return { type: SKILLS_FAILURE, payload: { error } }
}

export function skillRequest() {
    return { type: SKILL_REQUEST }
}

export function skillSuccess(item) {
    return { type: SKILL_SUCCESS, payload: { item } }
}

export function skillFailure(error) {
    return { type: SKILL_FAILURE, payload: { error } }
}