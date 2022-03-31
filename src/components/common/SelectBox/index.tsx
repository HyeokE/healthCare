import React from 'react';
import { useRecoilState } from 'recoil';
import { PATIENT_FILTER_KEY, patientFilterState } from '../../../store/filter';

const SelectBox = () => {
  const selectList = ['5', '10', '15', '30'];
  const [selected, setSelected] = useRecoilState(patientFilterState);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected({
      ...selected,
      [PATIENT_FILTER_KEY.LENGTH]: Number(e.target.value),
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
function useState(arg0: string): [any, any] {
  throw new Error('Function not implemented.');
}
