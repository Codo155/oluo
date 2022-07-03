# stage 1

FROM node:alpine AS my-app-build
WORKDIR /app
COPY ./oluo ./
RUN npm install 
RUN npm run build

# stage 2

FROM nginx:alpine
COPY --from=my-app-build /app/dist/odo-website /usr/share/nginx/html
EXPOSE 80