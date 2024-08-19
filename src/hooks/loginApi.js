const apiUrl = import.meta.env.VITE_API_BASE_URL;

export const apiRequest = (isSignUpMode, formData) => {
  const endpoint = isSignUpMode ? '/auth/signUp' : '/auth/login';
  const url = `${apiUrl}${endpoint}`;

  // 로그인 모드일 경우 id와 password만 추출, 회원가입 모드일 경우 전체 데이터를 전송
  const payload = isSignUpMode
    ? {
        id: formData.id,
        password: formData.password,
        name: formData.name,
        phone: formData.phone,
      }
    : {
        id: formData.id,
        password: formData.password,
      };

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(response => {
      if (!response.ok) {
        // HTTP 응답 상태 코드가 200-299 범위가 아닌 경우 오류로 간주
        throw new Error(
          isSignUpMode
            ? '회원가입에 실패했습니다. 입력 정보를 다시 확인해주세요.'
            : '아이디 또는 비밀번호가 일치하지 않습니다.'
        );
      }
      return response.json();
    })
    .then(jsonData => {
      if (isSignUpMode) {
        console.log('회원가입 성공:', jsonData);
        return {
          message: `${formData.id}님, 회원가입이 완료되었습니다.`,
        };
      } else {
        console.log('로그인 성공:', jsonData);
        return {
          token: jsonData.data.token,
          role: jsonData.data.role,
          message: `${formData.id}님, 로그인 되었습니다.`,
          user: {
            name: jsonData.data.name, // 여기는 실제 API 응답에 따라 동적으로 설정할 수 있습니다.
          },
        };
      }
    })
    .catch(error => {
      console.error('Error:', error.message);
      throw error;
    });
};
