import React from 'react';
import {
  StyledTable,
  StyledTbody,
  StyledTd,
  StyledTh,
  StyledTr,
} from './styled';
import { useGetPatientList } from '../../../apis/hooks/useGetPatientList';

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
          <thead>
            <tr>
              {tableHead.map((data, id) => (
                <StyledTh key={id}>{data}</StyledTh>
              ))}
            </tr>
          </thead>
          <StyledTbody>
            {patientList &&
              patientList.map((data) => (
                <StyledTr key={data.personID}>
                  <StyledTd>{data.personID}</StyledTd>
                  <StyledTd>{data.gender}</StyledTd>
                  <StyledTd>{data.birthDatetime}</StyledTd>
                  <StyledTd>{data.age}</StyledTd>
                  <StyledTd>{data.race}</StyledTd>
                  <StyledTd>{data.ethnicity}</StyledTd>
                  <StyledTd>{data.isDeath}</StyledTd>
                </StyledTr>
              ))}
          </StyledTbody>

          <tfoot>
            <tr>
              <StyledTd>
                {patientData.patient.page} /{' '}
                {patientData.patient.totalLength / 10}
              </StyledTd>
              <StyledTd>$180</StyledTd>
            </tr>
          </tfoot>
        </StyledTable>
      )}
    </>
  );
};

export default Table;
