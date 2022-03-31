import React from 'react';
import {
  StyledTable,
  StyledTd,
  StyledTh,
  StyledThead,
  TableBodyWrapper,
} from './styled';
import { useGetPatientList } from '../../../apis/hooks/useGetPatientList';
import TableRow from '../TableRow';
import { useRecoilValue } from 'recoil';
import { patientSelector } from '../../../store/filter';

const tableHead = [
  '환자 id (personID)',
  '성별 (gender)',
  '생년월일 (birthDatetime)',
  '나이 (age)',
  '인종 (race)',
  '민족 (ethnicity)',
  '사망 여부 (isDeath)',
];
const ColGroup = () => {
  return (
    <colgroup>
      <col width="10%" />
      <col width="5%" />
      <col width="10%" />
      <col width="5%" />
      <col width="5%" />
      <col width="8%" />
      <col width="8%" />
    </colgroup>
  );
};

const Table = () => {
  const filter = useRecoilValue(patientSelector);
  const { patientData } = useGetPatientList(filter);
  const patientList = patientData?.patient.list;
  return (
    <>
      {patientData && (
        <>
          <StyledTable>
            <ColGroup />
            <StyledThead>
              <tr>
                {tableHead.map((data, id) => (
                  <StyledTh key={id}>{data}</StyledTh>
                ))}
              </tr>
            </StyledThead>
          </StyledTable>
          <TableBodyWrapper>
            <StyledTable>
              <ColGroup />
              <tbody>
                {patientList &&
                  patientList.map((data, id) => (
                    <TableRow key={data.personID} {...data} nth={id} />
                  ))}
              </tbody>
            </StyledTable>
          </TableBodyWrapper>
          <tfoot>
            <tr>
              <StyledTd>
                {patientData.patient.page}/
                {patientData.patient.totalLength / 10}
              </StyledTd>
            </tr>
          </tfoot>
        </>
      )}
    </>
  );
};

export default Table;
