import fs from 'fs';
import path from 'path';

const loadModules = (folderPath, namespace) => {
  const modules = {};

  const directory = path.resolve(folderPath);

  const files = fs.readdirSync(directory);

  let ignoreRegex = /(index)(\.js)/;

  const dirStats = fs.statSync(folderPath); //throws if the directory doesnt exist or permission is denied

  if (!dirStats.isDirectory()) throw new Error(`${folderPath} is not a directory!`);

  const walk = (directory) => {
    const moduleFiles = [];
    const files = fs.readdirSync(directory);
    console.log('files', files);
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      if (file.match(ignoreRegex))
        continue;
      const stat = fs.statSync(path.join(directory, file));
      if (stat.isDirectory()) {
        const fileList = walk(path.join(directory, file));
        moduleFiles.push(...fileList);
      } else {
        moduleFiles.push(path.join(directory, file));
      }
    }
    return moduleFiles;
  };

  let result = walk(directory);
  console.log('result', result);
  for (let value of result) {
    let m = require(value);
    console.log('module', m);
    if (m[namespace]) {
      //store potentially incomplete reference containing the namespace here
      modules[path.basename(value, '.js')] = m;
    }
  }
  console.log('modules', modules);
  //Now bring the namespaced modules to top after all have been required
  //this should resolve circular dependency problems if any
  const moduleNames = Object.keys(modules);
  for (let moduleName of moduleNames) {
    modules[moduleName] = modules[moduleName][namespace];
  }

  return modules;
};

const sortedFieldObject = (obj) => {
  const sortedFieldObject = {};
  Object.keys(obj).sort().map((key) => {
    sortedFieldObject[key] = obj[key];
  });
  return sortedFieldObject;
}

const Common = {
  loadModules,
  sortedFieldObject
};

export {
  loadModules,
  sortedFieldObject
};

export default Common;
