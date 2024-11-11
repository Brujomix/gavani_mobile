import { db } from ".";

export const createTable_User = () => {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      local_Id TEXT PRIMARY KEY NOT NULL, 
      email TEXT NOT NULL, 
      id_Token TEXT NOT NULL, 
      imageProfile TEXT,
      isLogged INTEGER NOT NULL
    )
  `;

  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        query,
        [],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};

