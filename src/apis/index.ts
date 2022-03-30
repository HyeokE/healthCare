import axios from 'axios';
import { PatientListType } from '../types/patientListType';

class Api {
  private URL: string;
  constructor() {
    this.URL = 'http://49.50.167.136:9871/';
  }
  getPatientListData() {
    return axios.get<PatientListType>(`${this.URL}api/patient/list?length=10`);
  }
}
export default new Api();
