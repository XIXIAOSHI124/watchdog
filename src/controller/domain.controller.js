import DomainService from '../service/domain.service';
import {
  ResponseStatus,
  ResponseStatusMsg,
  ResponseBody,
} from '../util/http.util';

const getDomainRecords = async (ctx) => {
  const result = await DomainService.queryDomainRecords();
  const { data: { rs, ip, address } } = result;
  if (rs === 1 ) {
    ctx.body = ResponseBody.generate(ResponseStatus.SUCCESS, ResponseStatusMsg.SUCCESS, { ip, address });
  } else {
    ctx.body = ResponseBody.generate(ResponseStatus.FAILED, ResponseStatusMsg.FAILED, null);
  }
};

const DomainController = {
  getDomainRecords
};

export default DomainController;