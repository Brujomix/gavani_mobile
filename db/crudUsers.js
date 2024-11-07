import { db } from ".";
import { convertBase64ToBlob } from "../utils/convertToBlob";

export const addUser = () => {
  const promise = new Promise((resolve, reject) => {
    const query = `INSERT INTO user (email, localId, token, imageProfile) values(?,?,?,?)`;
    const imageBlob = convertBase64ToBlob(imageProfileBase64);
    db.transaction((tx) => {
      tx.executeSql(
        query,
        [email, localId, token, imageBlob],
        (_, result) => resolve(result),
        (_, result) => reject(result)
      );
    });
  });
  return promise;
};

export const fetchUser = () => {
    const promise = new Promise((resolve, reject) => {
      const query = `SELECT * FROM user `;
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

  export const clearUser = () => {
    const promise = new Promise((resolve, reject) => {
      const query = `DELETE FROM user`;
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