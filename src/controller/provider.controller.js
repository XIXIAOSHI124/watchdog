import AccessKeyService from '../service/accessKey.service';
import {
  ResponseStatus,
  ResponseStatusMsg,
  ResponseBody,
} from '../util/http.util';

const saveAccessKey = async (ctx) => {
  const { providerId, accessKeyId, accessKeySecret } = ctx.request.body;
  const result = await AccessKeyService.updateAccessKey(providerId, accessKeyId, accessKeySecret);
  
  if (result) {
    ctx.body = ResponseBody.generate(ResponseStatus.SUCCESS, ResponseStatusMsg.SUCCESS, result);
  } else {
    ctx.body = ResponseBody.generate(ResponseStatus.FAILED, ResponseStatusMsg.FAILED, null);
  }
};

const ProviderController = {
  saveAccessKey
};

export default ProviderController;
