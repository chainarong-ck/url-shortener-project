# Cloudflare Configuration

## SSL/TLS

- SSL/TLS encryption mode: Full (strict)
- Always Use HTTPS: Enabled

## Pointing

- A record for `example.com` pointing to the server's IP address
- CNAME record for `app` pointing to `example.com`
- CNAME record for `api` pointing to `example.com`

## Note

- `example.com` is the main domain for the redirector application
- `app.example.com` is the subdomain for the frontend (web) application
- `api.example.com` is the subdomain for the backend (api) application
- root path of the redirector application is `/` and it will redirect to `app.example.com`
