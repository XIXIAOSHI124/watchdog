import axios from 'axios';

async function queryLocalPublicIpAddress() {
  const url = 'https://www.ip.cn/api/index';
  const result = await axios.get(url, {
    params: {
      type: 0,
    }
  });
  return result;
}

const IpService = {
  queryLocalPublicIpAddress,
};

export default IpService;
