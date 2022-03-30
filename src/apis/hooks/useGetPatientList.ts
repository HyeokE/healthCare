import useSWR from 'swr';
import API from '../../apis';

async function getPatientList() {
  const res = await API.getPatientListData();
  return res.data;
}

export function useGetPatientList() {
  const { data: patientData, error } = useSWR(['api/patients'], getPatientList);
  return { patientData: patientData && patientData, error };
}
