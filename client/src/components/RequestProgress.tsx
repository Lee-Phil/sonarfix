import React from "react";
import { Spinner } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

export default function RequestProgress({ fileList, isloadingVisible }) {
  return (
    <div className="request-progress-container">
      {fileList.map(file => (
        <div key={file.file.name} className="uploaded-file-container">
          {file.file.name}
          {isloadingVisible ? (
            <span>
              <Spinner thickness="2px" speed="0.85s" emptyColor="gray.200" color="teal" size="md" marginLeft={"5px"} />{" "}
            </span>
          ) : (
            <span className="request-checkmark">
              <CheckCircleIcon id={"completed"} color={"#008000"} marginLeft="10px" />
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
