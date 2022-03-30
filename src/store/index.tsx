import { orderColumn } from '../types/patientFilterType';
import { atom } from 'recoil';

const PATIENT_FILTER = 'patientFilter';
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
  [PATIENT_FILTER_KEY.PAGE]: 0,
  [PATIENT_FILTER_KEY.LENGTH]: 0,
  [PATIENT_FILTER_KEY.AGE_MAX]: 0,
  [PATIENT_FILTER_KEY.AGE_MIN]: 0,
  [PATIENT_FILTER_KEY.ORDER_COLUMN]: orderColumn['person_id'].id,
  [PATIENT_FILTER_KEY.ORDER_DESC]: false,
  [PATIENT_FILTER_KEY.ETHNICITY]: '',
  [PATIENT_FILTER_KEY.RACE]: '',
  [PATIENT_FILTER_KEY.GENDER]: '',
  [PATIENT_FILTER_KEY.DEATH]: false,
};
export const filterState = atom<typeof PatientFilterState>({
  key: PATIENT_FILTER,
  default: PatientFilterState,
});
