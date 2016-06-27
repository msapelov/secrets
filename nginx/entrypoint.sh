#!/bin/sh
echo "start nginx"

#setup ssl keys
echo "ssl_key=${SSL_KEY:=secrets-key.pem}, ssl_cert=${SSL_CERT:=secrets-crt.pem}"
SSL_KEY=/etc/nginx/ssl/${SSL_KEY}
SSL_CERT=/etc/nginx/ssl/${SSL_CERT}
sed -i "s|SECRETS_KEY|${SSL_KEY}|g" /etc/nginx/conf.d/secrets.conf
sed -i "s|SECRETS_CERT|${SSL_CERT}|g" /etc/nginx/conf.d/secrets.conf

cp -f /robots.txt /srv/docroot/robots.txt
nginx -g "daemon off;"
