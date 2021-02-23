import path from 'path';

const dbConfig = {
  dbPath: path.join(path.resolve(__dirname, '../'), '/db/database.sqlite'),
  modelPath: path.join(path.resolve(__dirname, '../'), '/models')
};

export default dbConfig;