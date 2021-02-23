import { Model, DataTypes } from 'sequelize';
import DBHelper from '../database/sqlite.helper';

class AccessKey extends Model {

}

AccessKey.init({
  providerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  accessKeyId: DataTypes.STRING,
  accessKeySecret: DataTypes.STRING,
}, {
  sequelize: DBHelper,
  modelName: 'AccessKey'
});

export default AccessKey;
