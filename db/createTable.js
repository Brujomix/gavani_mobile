import { db } from ".";

export const createTable_User = () => {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      localId TEXT PRIMARY KEY NOT NULL, 
      email TEXT NOT NULL,
      refreshToken TEXT NOT NULL
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

export const dropTable = () => {
  const query = `
    DROP TABLE IF EXISTS users;
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