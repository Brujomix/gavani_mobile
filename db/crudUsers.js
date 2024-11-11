import { db } from ".";

export const addUser = (newUser) => {
  const { local_Id, email, id_Token, imageProfile, isLogged } = newUser;

  const query = `INSERT INTO users ( local_Id, email, id_Token, imageProfile, isLogged) VALUES (?, ?, ?, ?, ?)`;

  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        query,
        [local_Id, email, id_Token, imageProfile, isLogged],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};

export const fetchUser = () => {
  const query = `SELECT * FROM users `;
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
  const query = `DELETE FROM users`;
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
