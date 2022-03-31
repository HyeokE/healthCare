import React from 'react';
import {
  StyledTable,
  StyledTbody,
  StyledTd,
  StyledTh,
  StyledThead,
} from './styled';
import { useGetPatientList } from '../../../apis/hooks/useGetPatientList';
import TableRow from '../TableRow';

const tableHead = [
  '환자 id (personID)',
  '성별 (gender)',
  '생년월일 (birthDatetime)',
  '나이 (age)',
  '인종 (race)',
  '민족 (ethnicity)',
  '사망 여부 (isDeath)',
];

const Table = () => {
  const { patientData } = useGetPatientList();
  const patientList = patientData?.patient.list;
  return (
    <>
      {patientData && (
        <StyledTable>
          <StyledThead>
            <tr>
              {tableHead.map((data, id) => (
                <StyledTh key={id}>{data}</StyledTh>
              ))}
            </tr>
          </StyledThead>
          <StyledTbody>
            {patientList &&
              patientList.map((data, id) => (
                <TableRow key={data.personID} {...data} nth={id} />
              ))}
          </StyledTbody>
          <tfoot>
            <tr>
              <StyledTd>
                {patientData.patient.page}/
                {patientData.patient.totalLength / 10}
              </StyledTd>
            </tr>
          </tfoot>
        </StyledTable>
      )}
    </>
  );
};

export default Table;
