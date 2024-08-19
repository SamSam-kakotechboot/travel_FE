#!/bin/sh

if [ -z "$ACTIVE_COLOR" ]; then
  ACTIVE_COLOR="blue"
fi

echo $ACTIVE_COLOR > /etc/nginx/active_color.txt

nginx -g "daemon off;"