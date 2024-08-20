#!/bin/sh

if [ -z "$ACTIVE_COLOR" ]; then
  ACTIVE_COLOR="blue"
fi

if [ "$ACTIVE_COLOR" = "blue" ]; then
  sed -i 's/listen 8098;/listen 8099;/g' /etc/nginx/conf.d/default.conf
else
  sed -i 's/listen 8099;/listen 8098;/g' /etc/nginx/conf.d/default.conf
fi

nginx -g "daemon off;"