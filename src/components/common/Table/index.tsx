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
  'PersonID',
  'Gender',
  'BirthDatetime',
  'Age',
  'Race',
  'Ethnicity',
  'IsDeath',
];
const ColGroup = () => {
  return (
    <colgroup>
      <col width="20%" />
      <col width="10%" />
      <col width="20%" />
      <col width="10%" />
      <col width="10%" />
      <col width="20%" />
      <col width="10%" />
    </colgroup>
  );
};

const Table = () => {
  const [page, setPage] = useRecoilState(patientFilterState);
  const filter = useRecoilValue(patientSelector);
  const { patientData } = useGetPatientList(filter);
  const patientList = patientData?.patient.list;

  const totalPage = Math.ceil(
    (patientData?.patient?.totalLength as number) / page.length,
  );

  const currentPage = page.page;

  const pageHandler = (value: string) => {
    if (value === 'up') {
      if (totalPage !== currentPage) {
        setPage({
          ...page,
          [PATIENT_FILTER_KEY.PAGE]: page[PATIENT_FILTER_KEY.PAGE] + 1,
        });
      }
    }
    if (value === 'down') {
      if (currentPage !== 1) {
        setPage({
          ...page,
          [PATIENT_FILTER_KEY.PAGE]: page[PATIENT_FILTER_KEY.PAGE] - 1,
        });
      }
    }
  };

  return (
    <>
      <TableWrapper>
        <StyledTable>
          <ColGroup />
          <StyledThead>
            {tableHead.map((data, id) => (
              <StyledTh key={id}>{data}</StyledTh>
            ))}
          </StyledThead>
        </StyledTable>
        <TableBodyWrapper>
          {patientData && (
            <StyledTable>
              <ColGroup />
              <tbody>
                {patientList &&
                  patientList.map((data, id) => (
                    <TableDetailRow key={data.personID} {...data} nth={id} />
                  ))}
              </tbody>
            </StyledTable>
          )}
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
              {{ currentPage } && (
                <StyledTd>
                  {currentPage} / {totalPage}
                </StyledTd>
              )}
              <StyledTd onClick={() => pageHandler('down')}>이전으로</StyledTd>
              <StyledTd onClick={() => pageHandler('up')}>다음으로</StyledTd>
            </tr>
          </StyledTfoot>
        </StyledTable>
      </TableWrapper>
    </>
  );
};

export default Table;
