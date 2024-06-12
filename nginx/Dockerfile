# syntax=docker/dockerfile:1

FROM nginx:latest

# Copia la configurazione personalizzata del server
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Indica su quale porta è possibil raggiungere il servizio. La porta deve essere esposta tramite docker-compose
EXPOSE 80:80