import React, { useRef, useState } from 'react';
import BlackButton from './BlackButton';
import UploadButton from './UploadButton';

const AddProductModal = ({ onClose, onSubmit }) => {
  const formRef = useRef({});
  const [errors, setErrors] = useState({});
  const [uploadedFileName, setUploadedFileName] = useState('');

  const validationRules = {
    title: value => !!value || '제목이 필요합니다',
    place: value => !!value || '장소가 필요합니다',
    price: value =>
      (!!value && !isNaN(value) && value > 0) || '가격은 0원보다 커야 합니다',
    startDate: (value, allValues) => {
      if (!value) return '시작 날짜가 필요합니다';
      if (allValues.endDate && value > allValues.endDate)
        return '시작 날짜가 마감 날짜보다 늦을 수 없습니다';
      return true;
    },
    endDate: (value, allValues) => {
      if (!value) return '마감 날짜가 필요합니다';
      if (allValues.startDate && value < allValues.startDate)
        return '마감 날짜가 시작 날짜보다 빠를 수 없습니다';
      return true;
    },
    contents: value => !!value || '내용이 필요합니다',
  };

  const validate = () => {
    const formValues = Object.fromEntries(
      Object.entries(formRef.current).map(([key, ref]) => [key, ref.value])
    );

    const newErrors = {};
    Object.entries(validationRules).forEach(([field, rule]) => {
      const result = rule(formValues[field], formValues);
      if (result !== true) {
        newErrors[field] = result;
      }
    });

    return newErrors;
  };

  const handleFileChange = e => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFileName(file.name);
      formRef.current.file = file;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const productData = Object.fromEntries(
        Object.entries(formRef.current).map(([key, ref]) => [
          key,
          key === 'file' ? ref : ref.value,
        ])
      );
      onSubmit(productData);
    }
  };

  const getInputClassName = field => {
    return `p-2 border ${errors[field] ? 'border-red-500' : 'border-gray-300'} rounded`;
  };

  const renderInput = (name, type = 'text') => (
    <div key={name} className="flex flex-col">
      <label className="text-sm font-medium mb-1">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
      <input
        type={type}
        ref={el => (formRef.current[name] = el)}
        className={getInputClassName(name)}
      />
      {errors[name] && (
        <span className="text-red-500 text-sm mt-1">{errors[name]}</span>
      )}
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-144">
        <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {renderInput('title')}
          {renderInput('place')}
          {renderInput('price', 'number')}
          {renderInput('startDate', 'date')}
          {renderInput('endDate', 'date')}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Contents</label>
            <textarea
              ref={el => (formRef.current.contents = el)}
              className={getInputClassName('contents')}
            />
            {errors.contents && (
              <span className="text-red-500 text-sm mt-1">
                {errors.contents}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row space-x-2">
              <label className="text-sm font-medium mb-1">Upload Image</label>
              {!uploadedFileName && (
                <p className="text-xs text-gray-500 mb-2">
                  주의: 사진은 등록 이후 수정이 불가능합니다.
                </p>
              )}
            </div>
            <UploadButton
              onFileChange={handleFileChange}
              uploadedFileName={uploadedFileName}
            />
          </div>
          <div className="flex justify-between mt-4">
            <BlackButton
              width="120px"
              height="40px"
              text="Cancel"
              onClick={onClose}
            />
            <BlackButton
              width="120px"
              height="40px"
              text="Submit"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;
