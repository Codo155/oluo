FROM node:alpine AS my-app-build
WORKDIR /app
COPY . .
RUN npm install -g @angular/cli
# COPY ./package.json .
RUN npm install 
COPY . .
RUN ng build

# stage 2

FROM nginx:alpine
Run ls
COPY --from=my-app-build /app/dist/Odo_website /usr/share/nginx/html
EXPOSE 80