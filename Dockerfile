# 1단계: 빌드 스테이지
FROM node:22.3.0-alpine AS build

# npm 버전을 10.8.1로 업그레이드
RUN npm install -g npm@10.8.1

# 작업 디렉토리 설정
WORKDIR /app

# 환경 변수 설정
ARG VITE_API_BASE_URL

# package.json과 package-lock.json 복사
COPY package*.json ./

# 의존성 설치
RUN npm install

# 소스 코드 복사
COPY . .

# 빌드 환경 변수 파일 생성
RUN echo "VITE_API_BASE_URL=${VITE_API_BASE_URL}" > .env

# 리액트 애플리케이션 빌드
RUN npm run build

# 2단계: 프로덕션 스테이지
FROM nginx:alpine

# 빌드된 파일을 Nginx 기본 경로로 복사
COPY --from=build /app/dist /usr/share/nginx/html

# Nginx 포트 노출
EXPOSE 80

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]
