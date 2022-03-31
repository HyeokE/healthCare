import React from 'react';
import {
  StyledTable,
  StyledTd,
  StyledTfoot,
  StyledTh,
  StyledThead,
  TableBodyWrapper,
  TableWrapper,
} from './styled';
import { useGetPatientList } from '../../../apis/hooks/useGetPatientList';
import TableDetailRow from '../TableDetailRow';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  PATIENT_FILTER_KEY,
  patientFilterState,
  patientSelector,
} from '../../../store/filter';

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
  const [page, setPage] = useRecoilState(patientFilterState);
  const filter = useRecoilValue(patientSelector);
  const { patientData } = useGetPatientList(filter);
  const patientList = patientData?.patient.list;

  const totalPage = (): number => {
    return Math.ceil(
      (patientData?.patient?.totalLength as number) / page.length,
    );
  };

  const pageHandler = (value: string) => {
    if (value === 'up') {
      if (totalPage() !== patientData?.patient?.page) {
        setPage({
          ...page,
          [PATIENT_FILTER_KEY.PAGE]: page[PATIENT_FILTER_KEY.PAGE] + 1,
        });
      }
    }
    if (value === 'down') {
      if ((patientData?.patient?.page as number) !== 1) {
        setPage({
          ...page,
          [PATIENT_FILTER_KEY.PAGE]: page[PATIENT_FILTER_KEY.PAGE] - 1,
        });
      }
    }
  };

  return (
    <>
      {patientData && (
        <TableWrapper>
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
                    <TableDetailRow key={data.personID} {...data} nth={id} />
                  ))}
              </tbody>
            </StyledTable>
          </TableBodyWrapper>
          <StyledTable>
            <colgroup>
              <col width="80%" />
              <col width="7%" />
              <col width="7%" />
              <col width="7%" />
            </colgroup>
            <StyledTfoot>
              <tr>
                <StyledTd />
                <StyledTd>
                  {patientData.patient.page} / {totalPage()}
                </StyledTd>
                <StyledTd onClick={() => pageHandler('down')}>
                  이전으로
                </StyledTd>
                <StyledTd onClick={() => pageHandler('up')}>다음으로</StyledTd>
              </tr>
            </StyledTfoot>
          </StyledTable>
        </TableWrapper>
      )}
    </>
  );
};

export default Table;
