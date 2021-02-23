import axios from 'axios';

async function queryDomainRecords() {
  const url = 'https://www.ip.cn/api/index';
  const result = await axios.get(url, {
    params: {
      type: 0,
    }
  });
  return result;
}

const DomainService = {
  queryDomainRecords,
};

export default DomainService;