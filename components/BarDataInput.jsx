import React from "react";
import LabelDataInput from "./LabelDataInput";
// [{ label: "", data: 0 }];
const BarDataInput = ({ barData, setBarData }) => {
  const handleChangeLabel = (id, newLabelName) => {
    const tempData = barData;
    const elementToChange = tempData.find((ele) => ele.id === id);
    console.log(elementToChange);
    elementToChange.label = newLabelName;
    console.log(tempData);
    setBarData([...tempData]);
  };

  const handleChangeData = (id, dataValue) => {
    const tempData = barData;
    const elementToChange = tempData.find((ele) => ele.id === id);
    console.log(elementToChange);
    elementToChange.data = dataValue;
    console.log(tempData);
    setBarData([...tempData]);
  };

  const handleRemoveData = (id) => {
    const tempData = barData;
    const tempData1 = tempData.filter((ele) => ele.id !== id);
    //console.log(tempData);
    setBarData([...tempData1]);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      {barData.map((item, index) => {
        return (
          <LabelDataInput
            label={item.label}
            key={index}
            data={item.data}
            itemId={item.id}
            handleChangeLabel={handleChangeLabel}
            handleChangeData={handleChangeData}
            handleRemoveData={handleRemoveData}
          />
        );
      })}
      <button
        onClick={() =>
          setBarData([
            ...barData,
            {
              id: Date.now(),
              label: "Entry " + (barData.length + 1),
              data: 0,
            },
          ])
        }
      >
        Add Entry
      </button>
    </div>
  );
};

export default BarDataInput;
