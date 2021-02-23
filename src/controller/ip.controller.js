import IpService from '../service/ip.service';
import {
  ResponseStatus,
  ResponseStatusMsg,
  ResponseBody,
} from '../util/http.util';

const getLocalPublicIp = async (ctx) => {
  const result = await IpService.queryLocalPublicIpAddress();
  const { data: { rs, ip, address } } = result;
  if (rs === 1 ) {
    ctx.body = ResponseBody.generate(ResponseStatus.SUCCESS, ResponseStatusMsg.SUCCESS, { ip, address });
  } else {
    ctx.body = ResponseBody.generate(ResponseStatus.FAILED, ResponseStatusMsg.FAILED, null);
  }
};

const IpController = {
  getLocalPublicIp
};

export default IpController;
