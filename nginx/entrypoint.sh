##!/bin/sh
#
## 기본 값 설정 (Blue가 기본)
#if [ -z "$ACTIVE_COLOR" ]; then
#  ACTIVE_COLOR="blue"
#fi
#
## Nginx 설정 파일에서 $ACTIVE_COLOR 변수를 실제 값으로 치환
#sed -i "s/\$ACTIVE_COLOR/$ACTIVE_COLOR/g" /etc/nginx/conf.d/default.conf
#
## Nginx 실행
#nginx -g "daemon off;"
