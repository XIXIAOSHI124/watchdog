import DomainController from '../controller/domain.controller';

const prefix = '/domain';

const DomainRouter = [{
  method: 'get',
  route: `${prefix}/query`,
  handlers: [DomainController.getDomainRecords]
}];

export default DomainRouter;
