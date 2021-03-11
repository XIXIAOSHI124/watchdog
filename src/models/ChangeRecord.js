import { Model, DataTypes } from 'sequelize';
import DBHelper from '../database/sqlite.helper';

class ChangeRecord extends Model {

}

ChangeRecord.init({
  recordId: DataTypes.STRING,
  dateTime: DataTypes.DATE,
  ipAddress: DataTypes.STRING,
}, {
  sequelize: DBHelper,
  modelName: 'ChangeRecord'
});

export default ChangeRecord;
