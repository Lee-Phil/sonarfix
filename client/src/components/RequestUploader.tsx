import React, { useCallback } from "react";
import uploadcloud from "src/assets/upload-cloud.png";
import { useDropzone } from "react-dropzone";

export default function RequestUploader({ setFileList, setIsloadingVisible, setIsEmpty }) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const mappedAccepted = acceptedFiles.map(file => ({ file }));
    setFileList((curr: File[]) => [...curr, ...mappedAccepted]);
  }, []);

  const onDropAccepted = useCallback((acceptedFiles: File[]) => {
    const handleUpload = async () => {
      const formData = new FormData();
      acceptedFiles.forEach(file => {
        formData.append(file.name, file);
      });

      try {
        await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/api/request/upload", {
          method: "POST",
          body: formData,
          headers: { "content-type": "multipart/form-data" },
        }).then(data => console.log(data));
      } catch (error) {
        console.log(error.response.data);
      }
    };
    handleUpload();

    setIsloadingVisible(true);
    setIsEmpty(true);
    setTimeout(() => {
      setIsloadingVisible(false);
    }, 3000);
  }, []);

  const { getRootProps, getInputProps, isDragAccept, isDragReject } = useDropzone({
    accept: {
      "text/csv": [".csv"],
      "application/json": [".json"],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"],
    },
    onDrop: onDrop,
    onDropAccepted: onDropAccepted,
  });

  return (
    <div className="drop-file-background">
      <div
        className={`drop-file-input ${isDragReject ? "drop-file-denied" : ""} ${
          isDragAccept ? "drop-file-accepted" : ""
        }`}
        {...getRootProps()}>
        <div className="drop-file-input-label">
          <img src={uploadcloud.src} alt="" />
          {isDragReject ? (
            <div>
              <p>WARNING: One or more of your files is of the incorrect type!</p>
              <p>Only .xlsx, .csv and .json files are valid file types</p>
            </div>
          ) : (
            <div>
              <p>Drag & Drop your files and start uploading</p>
              <p>.xlsx, .csv and .json files are valid file types</p>
            </div>
          )}
        </div>
      </div>

      <input type="file" id="file-upload" {...getInputProps()} />
    </div>
  );
}
