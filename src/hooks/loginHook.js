import { useState, useRef } from 'react';

const LoginHook = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    password: '',
    name: '',
    phone: '',
    remember: false,
  });
  const refs = {
    id: useRef(null),
    password: useRef(null),
    name: useRef(null),
    phone: useRef(null),
    remember: useRef(null),
  };

  const setRef = key => refs[key];

  const toggleMode = () => setIsSignUpMode(!isSignUpMode);

  const updateFormData = callback => {
    const newData = {
      id: refs.id.current.value,
      password: refs.password.current.value,
      name: isSignUpMode ? refs.name.current.value : '',
      phone: isSignUpMode ? refs.phone.current.value : '',
      remember: isSignUpMode ? false : refs.remember.current?.checked || false,
    };
    setFormData(newData);
    if (callback) callback(newData);
  };

  return { isSignUpMode, formData, setRef, toggleMode, updateFormData };
};

export default LoginHook;
