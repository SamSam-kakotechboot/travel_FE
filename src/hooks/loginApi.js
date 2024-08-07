export const apiRequest = (isSignUpMode, formData) => {
  return new Promise((resolve, reject) => {
    const mockData = [
      {
        id: 'user1',
        password: '1234',
        name: '홍길동',
        phone: '010-1234-5678',
      },
    ];

    const user = mockData.find(
      user => user.id === formData.id && user.password === formData.password
    );

    if (user) {
      resolve({
        token:
          'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzIiwicm9sZSI6Ik5PUk1BTCIsIm5hbWUiOiLtmY3quLjrj5kiLCJpZCI6IjMiLCJleHAiOjIzMjEzNTU4OTR9.1v3fnVPcs-xn2nKUDYrCOxcBM86OWNGO7m-tPWm_bqg',
        role: 'NORMAL',
        message: `${formData.id} 로그인 되었습니다.`,
        user: user,
      });
    } else {
      reject('아이디 또는 비밀번호가 일치하지 않습니다.');
    }
  });
};
