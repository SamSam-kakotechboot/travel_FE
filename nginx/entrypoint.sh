#!/bin/sh

# Nginx 설정 파일에서 ${ACTIVE_COLOR}를 사용할 수 있도록 설정
if [ -z "$ACTIVE_COLOR" ]; then
  ACTIVE_COLOR="blue"
fi

# Nginx 설정 파일에 ACTIVE_COLOR 값을 직접 삽입
sed -i "s/\$ACTIVE_COLOR/$ACTIVE_COLOR/g" /etc/nginx/conf.d/default.conf

# Nginx 실행
nginx -g "daemon off;"