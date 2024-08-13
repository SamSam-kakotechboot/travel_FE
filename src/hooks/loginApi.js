const apiUrl = import.meta.env.VITE_API_BASE_URL;

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

export const apiRequest = (isSignUpMode, formData) => {
  const endpoint = isSignUpMode ? '/auth/signUp' : '/auth/login';
  const url = `${apiUrl}${endpoint}`;

  // 로그인 모드일 경우 id와 password만 추출
  const payload = isSignUpMode
    ? formData
    : {
        id: formData.id,
        password: formData.password,
      };

  // console.log('Payload:', payload);

  return fetch(url, {
    method: 'POST',
    headers: {
      // Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('아이디 또는 비밀번호가 일치하지 않습니다.');
      }
      return response.json();
    })
    .then(jsonData => {
      console.log(jsonData);
      return {
        token: jsonData.data.token,
        role: jsonData.data.role,
        message: `${formData.id} 로그인 되었습니다.`,
        user: {
          id: 'test',
          password: 'test',
          name: '홍길동',
          phone: '010-1234-5678',
        },
      };
    })
    .catch(error => {
      throw error;
    });
};
