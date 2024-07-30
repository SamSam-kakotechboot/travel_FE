import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import UploadIcon from './icons/UploadIcon';

const UploadButton = ({ onFileChange, uploadedFileName }) => {
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="flex items-center gap-[10px]">
      <div
        onClick={handleUploadClick}
        className="flex items-center justify-center w-[190px] h-[40px] px-[15px] py-[5px] rounded-full bg-[#DDE1E6] cursor-pointer"
      >
        <UploadIcon className="mr-[3px]" isClickable={false} />
        <span className="text-[12px]">Upload a Picture</span>
        <input
          type="file"
          ref={fileInputRef}
          onChange={onFileChange}
          className="hidden"
        />
      </div>
      {uploadedFileName && (
        <span className="text-gray-500 text-[12px]">{uploadedFileName}</span>
      )}
    </div>
  );
};

UploadButton.propTypes = {
  onFileChange: PropTypes.func.isRequired,
  uploadedFileName: PropTypes.string,
};

export default UploadButton;
