export interface PatientListType {
  patient: {
    list: patientType[];
    page: 0;
    totalLength: 0;
  };
}
export interface patientType {
  age: 0;
  birthDatetime: 'string';
  ethnicity: 'string';
  gender: 'string';
  isDeath: true;
  personID: 0;
  race: 'string';
}
