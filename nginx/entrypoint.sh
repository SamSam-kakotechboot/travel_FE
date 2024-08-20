#!/bin/sh

# 기본 색상 설정 (blue)
if [ -z "$ACTIVE_COLOR" ]; then
  ACTIVE_COLOR="blue"
fi

# Nginx 시작
nginx -g "daemon off;"