FROM mongo

# Copia el script de inicialización a la imagen
COPY ./init-mongo.js /docker-entrypoint-initdb.d/

# Expone el puerto por defecto de MongoDB
EXPOSE 27017

# Ejecuta el servicio de MongoDB
CMD ["mongod"]