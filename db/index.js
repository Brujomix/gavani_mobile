import * as SQLite from "expo-sqlite/legacy";

export const db = SQLite.openDatabase("localDatabase.db");