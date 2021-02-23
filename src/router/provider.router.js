import ProviderController from '../controller/provider.controller';

const prefix = '/provider';

const ProviderRouter = [{
  method: 'post',
  route: `${prefix}/access-key`,
  handlers: [ProviderController.saveAccessKey]
}];

export default ProviderRouter;
