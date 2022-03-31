import useSWR from 'swr';
import API from '../../apis';
import { PatientFilterState } from '../../store/filter';

async function getPatientList(url: string) {
  const res = await API.getPatientListData(url);
  return res.data;
}

export function useGetPatientList(params: typeof PatientFilterState) {
  const { data: patientData, error } = useSWR(
    [`list?length=${params.length}&page=${params.page}`],
    getPatientList,
  );
  return { patientData: patientData && patientData, error };
}
