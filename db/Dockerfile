FROM mongo

# Copia el script de inicialización a la imagen
COPY . .
EXPOSE 27017

ENV MONGODB_URI mongodb://mongo:27017/test

# Ejecuta el servicio de MongoDB
CMD ["mongod"]