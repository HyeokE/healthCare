import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { PATIENT_FILTER_KEY, patientFilterState } from '../../../store/filter';

const SelectBox = () => {
  const selectList = ['15', '30', '50'];
  const [selected, setSelected] = useRecoilState(patientFilterState);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected({
      ...selected,
      [PATIENT_FILTER_KEY.LENGTH]: Number(e.target.value),
      [PATIENT_FILTER_KEY.PAGE]: 1,
    });
  };
  return (
    <select onChange={handleSelect} value={selected.length}>
      {selectList.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
