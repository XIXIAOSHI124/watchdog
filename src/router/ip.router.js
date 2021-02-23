import IpController from '../controller/ip.controller';

const IpRouter = [{
  method: 'get',
  route: '/ip/local',
  handlers: [IpController.getLocalPublicIp]
}];

export default IpRouter;
