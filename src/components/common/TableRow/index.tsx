import React, { useState } from 'react';
import { DetailSection, Disease, StyledTd, StyledTr } from '../Table/styled';
import { patientType } from '../../../types/patientListType';
import { useGetPatientDetail } from '../../../apis/hooks/usePatientDetail';
import { DetailRow } from './styled';

interface TableRowProps extends patientType {
  nth: number;
}

const TableRow = (data: TableRowProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { patientDetailData } = useGetPatientDetail(String(data.personID));
  const {
    nth,
    age,
    ethnicity,
    birthDatetime,
    gender,
    race,
    isDeath,
    personID,
  } = data;
  return (
    <>
      <StyledTr nth={nth} onClick={() => setIsOpen(!isOpen)}>
        <StyledTd>{personID}</StyledTd>
        <StyledTd>{gender}</StyledTd>
        <StyledTd>{birthDatetime}</StyledTd>
        <StyledTd>{age}</StyledTd>
        <StyledTd>{race}</StyledTd>
        <StyledTd>{ethnicity}</StyledTd>
        <StyledTd>{isDeath}</StyledTd>
      </StyledTr>
      {patientDetailData && (
        <>
          <DetailRow isOpen={isOpen}>
            <StyledTd>방문횟수 : {patientDetailData.visitCount}</StyledTd>
            <StyledTd colSpan={6}>
              <DetailSection>
                최근 진단내역
                {patientDetailData.conditionList.map((data, id) => (
                  <Disease key={id}>{data}</Disease>
                ))}
              </DetailSection>
            </StyledTd>
          </DetailRow>
        </>
      )}
    </>
  );
};

export default TableRow;
