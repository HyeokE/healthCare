import React from 'react';
import { StyledTable, StyledTh } from './styled';
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
    <StyledTable>
      <thead>
        <tr>
          {tableHead.map((data, id) => (
            <StyledTh key={id}>{data}</StyledTh>
          ))}
        </tr>
      </thead>
      {patientList &&
        patientList.map((data) => (
          <tbody key={data.personID}>
            <tr>
              <td>{data.personID}</td>
              <td>{data.gender}</td>
              <td>{data.birthDatetime}</td>
              <td>{data.age}</td>
              <td>{data.race}</td>
              <td>{data.ethnicity}</td>
              <td>{data.isDeath}</td>
            </tr>
          </tbody>
        ))}

      <tfoot>
        <tr>
          <td>Sum</td>
          <td>$180</td>
        </tr>
      </tfoot>
    </StyledTable>
  );
};

export default Table;
