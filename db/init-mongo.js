// Crea una base de datos y un usuario con permisos de administrador
db.createUser({
    user: "admin",
    pwd: "password",
    roles: [
      {
        role: "userAdminAnyDatabase",
        db: "admin",
      },
    ],
  });
  
  // Crea una base de datos y un usuario con permisos de lectura y escritura en la colección "users"
  db = db.getSiblingDB("db");
  db.createUser({
    user: "user",
    pwd: "password",
    roles: [
      {
        role: "readWrite",
        db: "db",
        collection: "users",
      },
    ],
  });
  
  // Inserta algunos documentos en la colección "users"
  db.users.insertMany([
    { name: "John Doe", email: "john.doe@example.com" },
    { name: "Jane Doe", email: "jane.doe@example.com" },
  ]);