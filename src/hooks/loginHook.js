import { useState, useRef } from 'react';

export default function LoginHook() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    password: '',
    name: '',
    phone: '',
    remember: false,
  });

  const refs = useRef({
    id: null,
    password: null,
    name: null,
    phone: null,
    remember: null,
  });

  const setRef = field => el => {
    refs.current[field] = el;
  };

  const getFormData = () => {
    return {
      id: refs.current.id ? refs.current.id.value : '',
      password: refs.current.password ? refs.current.password.value : '',
      name: refs.current.name ? refs.current.name.value : '',
      phone: refs.current.phone ? refs.current.phone.value : '',
      remember: refs.current.remember ? refs.current.remember.checked : false,
    };
  };

  const toggleMode = () => {
    setIsSignUpMode(!isSignUpMode);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const updatedFormData = getFormData();
    setFormData(updatedFormData);

    console.log(updatedFormData);

    // const url = isSignUpMode ? '/api/signup' : '/api/login';
    // fetch(url, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log('Success:', data);
    //     // Handle successful login or signup
    //   })
    //   .catch(error => {
    //     console.error('Error:', error);
    //     // Handle error
    //   });
  };

  return {
    isSignUpMode,
    formData,
    setRef,
    toggleMode,
    handleSubmit,
  };
}
