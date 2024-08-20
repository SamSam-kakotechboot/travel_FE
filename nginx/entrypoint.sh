#!/bin/sh

# Nginx에서 사용할 수 있도록 환경 변수 설정
echo "env ACTIVE_COLOR=${ACTIVE_COLOR};" >> /etc/nginx/nginx.conf

# Nginx 설정 파일에서 ${active_color}를 사용할 수 있도록 설정
if [ -z "$ACTIVE_COLOR" ]; then
  ACTIVE_COLOR="blue"
fi

nginx -g "daemon off;"