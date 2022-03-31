import useSWR from 'swr';
import API from '../../apis';

async function getPatientDetail(url: string) {
  const res = await API.getPatientDetailData(url);
  return res.data;
}

export function useGetPatientDetail(personId: string) {
  const { data: patientDetailData, error } = useSWR(
    [`brief/${personId}`],
    getPatientDetail,
  );
  return { patientDetailData: patientDetailData && patientDetailData, error };
}
