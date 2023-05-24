import React from "react";

const LabelDataInput = ({
  label,
  data,
  itemId,
  handleChangeLabel,
  handleChangeData,
  handleRemoveData,
}) => {
  return (
    <div className="flex justify-center items-center gap-4">
      <div className="flex flex-col justify-center items-start gap-1">
        <label htmlFor="dataLabel">Label</label>
        <input
          type="text"
          name="dataLabel"
          id="dataLabel"
          className="w-32 outline-none rounded-lg shadow-md px-2 py-1"
          value={label}
          onChange={(e) => handleChangeLabel(itemId, e.target.value)}
        />
      </div>
      <div className="flex flex-col justify-center items-start gap-1">
        <label htmlFor="data">Data</label>
        <input
          type="number"
          name="data"
          id="data"
          className="w-32 outline-none rounded-lg shadow-md px-2 py-1"
          value={data}
          onChange={(e) => handleChangeData(itemId, e.target.value)}
        />
      </div>
      <button onClick={() => handleRemoveData(itemId)}>Remove</button>
    </div>
  );
};

export default LabelDataInput;
