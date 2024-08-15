// src/api.js

export const apiRequesthttp = async (isSignUpMode, formData) => {
  const url = isSignUpMode ? '/api/auth/signUp' : '/api/auth/login';
  const headers = {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
  };
  const body = isSignUpMode
    ? JSON.stringify({
        id: formData.id,
        password: formData.password,
        name: formData.name,
        phone: formData.phone,
      })
    : JSON.stringify({
        id: formData.id,
        password: formData.password,
      });

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: body,
    });
    const result = await response.json();
    if (response.ok) {
      if (isSignUpMode) {
        alert(`${formData.id} 회원가입에 성공했습니다.`);
      } else {
        alert(`${formData.id} 로그인 되었습니다.`);
        // 여기서 토큰과 역할을 저장할 수 있습니다.
        // localStorage.setItem('token', result.token);
        // localStorage.setItem('role', result.role);
      }
    } else {
      alert(result.message);
    }
  } catch (error) {
    console.error('Error:', error);
    alert('오류가 발생했습니다. 다시 시도해 주세요.');
  }
};
