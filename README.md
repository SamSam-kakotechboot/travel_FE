# travel_FE

지능형 여행 및 생활 어시스턴트 : 사용자 맞춤형 여행 정보 및 생활 정보를 제공하는 지능형 어시스턴트 개발

# Getting Started

## 필수

npm install

npm create vite@latest . -- --template react

npm install @reduxjs/toolkit react-redux

npm install react-router-dom

npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p

이후 전체파일 루트 디렉토리에 붙여넣기

---

## 선택

npm install eslint prettier eslint-plugin-prettier eslint-config-prettier --save-dev

(VsCode의 ESLint, Prettier - Code formatter 설치 필요)

## 로컬 환경 구성

미정

### CI

미정

### Branch 전략

Git-flow 전략을 따름

- main : 제품으로 출시될 수 있는 브랜치
- develop : 다음 출시 버전을 개발하는 브랜치
- feature : 기능을 개발하는 브랜치
- release : 이번 출시 버전을 준비하는 브랜치
- hotfix : 출시 버전에서 발생한 버그를 수정 하는 브랜치

[참고](https://techblog.woowahan.com/2553/)

### 커밋 메시지 컨벤션

한글로 작성  
기본 원칙 : 1 Action 1 Commit(최대한 작게 쪼개 한 커밋에 하나의 기능만 커밋되도룍)

- feat : 새로운 기능 추가
- fix : 버그 수정
- docs : 문서 수정
- style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
- design : css, html등 변경
- refactor : 코드 리펙토링
- test : 테스트 코드, 리펙토링 테스트 코드 추가
- chore : 빌드 업무 수정, 패키지 매니저 수정
- rename : 파일 혹은 폴더 명 변경만 진행된 경우
- remove : 파일 혹은 폴더 삭제 작업만 진행된 경우
```
