import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';

const db = SQLite.openDatabase("odyssey.db");

export const initDatabase = async () => {
  const asset = Asset.fromModule(require('../assets/schema/od.sql'));
  await asset.downloadAsync();
  const sql = await FileSystem.readAsStringAsync(asset.localUri);

  sql.split(';').forEach((query) => {
    const clean = query.trim();
    if (clean) {
      db.transaction(tx => tx.executeSql(clean));
    }
  });

  console.log("✅ DB loaded from od.sql");
};

export default db;
