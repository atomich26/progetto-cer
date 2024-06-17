# syntax=docker/dockerfile:1

ARG NGINX_VERSION=latest

FROM nginx:${NGINX_VERSION}

# Copia la configurazione personalizzata del server
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Indica su quale porta è possibile raggiungere il servizio. La porta deve essere esposta tramite docker-compose
EXPOSE 80:80