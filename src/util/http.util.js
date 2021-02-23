const ResponseStatus = {
  SUCCESS: 0,
  FAILED: 4,
};

const ResponseStatusMsg = {
  SUCCESS: 'success',
  FAILED: 'failed',
};

const ResponseBody = {
  generate: (status, message, payload) => {
    return {
      status, message, data: payload
    }
  }
};

const HttpUtil = {
  ResponseStatus,
  ResponseStatusMsg,
  ResponseBody,
};

export {
  ResponseStatus,
  ResponseStatusMsg,
  ResponseBody,
};

export default HttpUtil;
