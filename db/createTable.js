import { db } from ".";

export const createTable_User = () => {
  const promise = new Promise((resolve, reject) => {
    const query = `CREATE TABLE IF NOT EXISTS user (localId TEXT PRIMARY KEY NOT NULL, email TEXT NOT NULL, token TEXT NOT NULL)`;
    db.transaction((tx) => {
      tx.executeSql(
        query,
        [],
        (_, result) => resolve(result),
        (_, result) => reject(result)
      );
    });
  });
  return promise;
};
