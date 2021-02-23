import { DataTypes, Model } from 'sequelize';
import DBHelper from '../database/sqlite.helper';

class LocalSever extends Model {}

LocalSever.init({
  serverName: DataTypes.STRING,
  ipAddress: DataTypes.STRING,
  ipLocation: DataTypes.STRING
}, {
  sequelize: DBHelper,
  modelName: 'LocalServer'
});

export default LocalSever;
