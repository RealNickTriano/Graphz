import React, { useState } from "react";

const FileUpload = ({
  setContents,
  setFormattedData,
  setMaxY,
  setMinY,
  setYInterval,
}) => {
  const [file, setFile] = useState();
  const [fileSize, setFileSize] = useState("0 B");
  const [fileName, setFileName] = useState(" ");

  const calculateFileSize = (someFile) => {
    let numberOfBytes = someFile.size;
    // Approximate to the closest prefixed unit
    const units = ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];

    const exponent = Math.min(
      Math.floor(Math.log(numberOfBytes) / Math.log(1024)),
      units.length - 1
    );
    const approx = numberOfBytes / 1024 ** exponent;
    const output =
      exponent === 0
        ? `${numberOfBytes} B`
        : `${approx.toFixed(3)} ${units[exponent]} (${numberOfBytes} B)`;
    return output;
  };

  const parseCSV = (csvString) => {
    // Split the CSV string into an array of lines
    const lines = csvString.trim().split("\n");

    // Extract the column headers from the first line
    const headers = lines.shift().split(",");

    // Initialize an object to store the columns
    const columns = {};

    // Initialize the columns object with empty arrays for each header
    headers.forEach((header) => {
      columns[header] = [];
    });

    // Process each line and populate the columns
    lines.forEach((line) => {
      const values = line.split(",");

      // Iterate through the values and push them into the corresponding column
      values.forEach((value, index) => {
        const header = headers[index];
        columns[header].push(value);
      });
    });

    return columns;
  };

  // Files are here
  const handleFiles = (files) => {
    const myFile = files[0];
    if (myFile.type !== "text/csv") {
      console.log("Unsupported File Type!");
    } else {
      const myFileSize = calculateFileSize(myFile);
      setFileSize(myFileSize);
      setFileName(myFile.name);
      console.log(myFileSize);
      setFile(myFile);
      console.log(myFile);
      // Read File Contents
      const reader = new FileReader();

      reader.onload = (evt) => {
        console.log(evt.target.result);
        const res = parseCSV(evt.target.result);
        setContents(res);
        console.log(res);

        const keys = Object.keys(res);
        // grab the headers
        const header1 = keys[0];
        const header2 = keys[1];

        const values = Object.values(res);
        // grab the data
        const dataCol1 = values[0];
        const dataCol2 = values[1];

        // create Bar obj for each
        const barData = [];
        dataCol1.forEach((item, index) =>
          barData.push({
            id: Date.now(),
            label: item,
            data: dataCol2[index],
          })
        );
        setFormattedData(barData);
        const minY = Math.min(...barData.map((item) => item.data));
        const maxY = Math.max(...barData.map((item) => item.data));
        const yInterval = Math.floor((maxY - minY) / 10);

        setMaxY(maxY);
        setMinY(minY);
        setYInterval(yInterval);
      };

      reader.readAsText(myFile);
    }
  };
  const handleFile = (e) => {
    handleFiles(e.target.files);
  };

  const handleUploadClick = () => {
    const fileElem = document.getElementById("fileUpload");
    if (fileElem) {
      fileElem.click();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-1">
      <input
        className="bg-blue-500 rounded-md px-4 py-1 hidden"
        type="file"
        name="file"
        accept="text/csv"
        id="fileUpload"
        onChange={handleFile}
      />
      <button
        className="bg-black text-white rounded-md px-4 py-2 font-semibold"
        id="fileSelect"
        onClick={handleUploadClick}
        onDragEnter={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
        onDragOver={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
        onDrop={(e) => {
          e.stopPropagation();
          e.preventDefault();

          const dt = e.dataTransfer;
          const files = dt.files;
          handleFiles(files);
        }}
      >
        Upload CSV
      </button>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-sm text-gray-500">File Size: {fileSize}</h2>
        <h2 className="text-sm text-gray-500">{fileName}</h2>
      </div>
    </div>
  );
};

export default FileUpload;
