import AccessKey from '../models/AccessKey';

async function updateAccessKey(providerId, accessKeyId, accessKeySecret) {
  console.log(providerId, accessKeyId, accessKeySecret);
  const accessKey = await AccessKey.findByPk(providerId);
  console.log(accessKey);
  let result;
  if (accessKey) {
    result = await accessKey.update({
      accessKeyId,
      accessKeySecret,
    });
  } else {
    result = await AccessKey.create({
      providerId,
      accessKeyId,
      accessKeySecret,
    });
  }
  return result;
}

function signatureParamForAliyun() {
  
}

const AccessKeyService = {
  updateAccessKey,
};

export default AccessKeyService;
