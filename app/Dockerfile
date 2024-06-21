# syntax=docker/dockerfile:1

# Specifico un argomento per selezionare la versione di NodeJS
ARG NODE_VERSION=20.11.0

FROM node:${NODE_VERSION}-alpine

# Usa l'ambiente di sviluppo come ambiente di default
ENV NODE_ENV development

WORKDIR /usr/src/app

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev
 
#Copia tutti i file del progetto
COPY . .

# Installa i pacchetti npm
RUN npm install

# Compila i file typescript
RUN npx tsc

# Espone l'applicazione sulla porta 3000
EXPOSE 3000

CMD ["npm", "run", "init"]