# Especifica la imagen base que se utilizará
FROM ubuntu:latest

# Actualiza los paquetes e instala MongoDB
RUN apt-get update && \
    apt-get install -y mongodb && \
    rm -rf /var/lib/apt/lists/*

# Crea el directorio de datos de MongoDB
RUN mkdir -p /data/db

# Expone el puerto por defecto de MongoDB (27017)
EXPOSE 27017

# Ejecuta el comando "mongod" para iniciar MongoDB
CMD ["mongod"]