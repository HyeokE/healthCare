import { orderColumn } from '../types/patientFilterType';
import { atom, selector } from 'recoil';

const PATIENT_FILTER = 'patientFilter';
const PATIENT_FILTER_SELECTOR = 'filterSelector';

export const PATIENT_FILTER_KEY = {
  PAGE: 'page',
  LENGTH: 'length',
  ORDER_COLUMN: 'orderColumn',
  ORDER_DESC: 'orderDesc',
  GENDER: 'gender',
  RACE: 'race',
  ETHNICITY: 'ethnicity',
  AGE_MIN: 'ageMin',
  AGE_MAX: 'ageMax',
  DEATH: 'death',
} as const;
export const PatientFilterState = {
  [PATIENT_FILTER_KEY.LENGTH]: 15,
  [PATIENT_FILTER_KEY.PAGE]: 1,
  [PATIENT_FILTER_KEY.AGE_MAX]: 0,
  [PATIENT_FILTER_KEY.AGE_MIN]: 0,
  [PATIENT_FILTER_KEY.ORDER_COLUMN]: orderColumn[0].id,
  [PATIENT_FILTER_KEY.ORDER_DESC]: false,
  [PATIENT_FILTER_KEY.ETHNICITY]: '',
  [PATIENT_FILTER_KEY.RACE]: '',
  [PATIENT_FILTER_KEY.GENDER]: '',
  [PATIENT_FILTER_KEY.DEATH]: false,
};
export const patientFilterState = atom({
  key: PATIENT_FILTER,
  default: PatientFilterState,
});
export const patientSelector = selector({
  key: PATIENT_FILTER_SELECTOR,
  get: ({ get }) => get(patientFilterState),
});
