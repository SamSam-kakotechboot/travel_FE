const apiUrl = import.meta.env.VITE_API_BASE_URL;

export const apiRequest = (isSignUpMode, formData) => {
  const endpoint = isSignUpMode ? '/auth/signUp' : '/auth/login';
  const url = `${apiUrl}${endpoint}`;

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('아이디 또는 비밀번호가 일치하지 않습니다.');
      }
      return response.json();
    })
    .then(data => {
      return {
        token: data.token,
        role: data.role,
        message: `${formData.id} 로그인 되었습니다.`,
        user: data.user,
      };
    })
    .catch(error => {
      throw error;
    });
};
