FROM nginx:mainline-alpine
COPY ./web /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


#COPY --from=build /app/build /usr/share/nginx/html
# COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf