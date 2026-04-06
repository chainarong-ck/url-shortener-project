# Nginx Notes

## Certificate (SSL/TLS)

You can use [Let's Encrypt](https://letsencrypt.org/) to get free SSL/TLS certificates for your domain.

Or you can use [Cloudflare Origin Server](https://dash.cloudflare.com/?to=/:account/:zone/ssl-tls/origin) to manage your DNS and get free SSL/TLS certificates.

## Setup Certificate

- If you have a certificate file and a private key file, you can use them to setup SSL/TLS for your Nginx server.
- copy the certificate file to `infra/nginx/ssl/origin.crt`.
- copy the private key file to `infra/nginx/ssl/origin.key`.
