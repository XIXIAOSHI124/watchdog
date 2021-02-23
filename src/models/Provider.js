import { Model, DataTypes } from 'sequelize';
import DBHelper from '../database/sqlite.helper';

class Provider extends Model {

}

Provider.init({
  providerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  name: DataTypes.STRING,
}, {
  sequelize: DBHelper,
  modelName: 'Provider'
});

export default Provider;
