import { Sequelize } from 'sequelize';
import { loadModules } from '../util/common.util';
import { dbConfig } from '../config';

const options = {
  dialect: 'sqlite',
  storage: dbConfig.dbPath
};
const sequelize = new Sequelize(options);

(async () => {
  // Initialize database
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  // Load models
  const models = loadModules(dbConfig.modelPath, 'default');
  for (let model of Object.values(models)) {
    await model.sync();
  }
})();


export default sequelize;
