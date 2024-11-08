import { db } from ".";
import { convertBase64ToBlob } from "../utils/convertToBlob";

export const addUser = (newUser) => {

  const { email, localId, token, imageProfileBase64 } = newUser;

  const query = `INSERT INTO users (email, local_Id, id_Token, imageProfile) VALUES (?, ?, ?, ?)`;

  return new Promise((resolve, reject) => {

    const imageBlob = convertBase64ToBlob(imageProfileBase64);

    db.transaction((tx) => {
      tx.executeSql(
        query,
        [email, localId, token, imageBlob],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};

export const fetchUser = () => {
  const query = `SELECT * FROM user `;
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        query,
        [],
        (_, result) => resolve(result),
        (_, result) => reject(result)
      );
    });
  });
};

export const clearUser = () => {
  const query = `DELETE FROM user`;
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
