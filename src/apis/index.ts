import axios from 'axios';
import { PatientListType } from '../types/patientListType';
import { PatientBriefType } from '../types/patientBriefType';

class Api {
  private URL: string;
  constructor() {
    this.URL = 'http://49.50.167.136:9871/';
  }
  getPatientListData(url: string) {
    return axios.get<PatientListType>(`${this.URL}api/patient/${url}`);
  }
  getPatientDetailData(url: string) {
    return axios.get<PatientBriefType>(`${this.URL}api/patient/${url}`);
  }
}
export default new Api();
