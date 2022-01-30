exports.handler = async (event) => {
  return {
    status: "200",
    headers: {
      "cache-control": [{
        key: "Cache-Control",
        value: "no-cache"
      }],
      "content-type": [{
        key: "Content-Type",
        value: "text/plain"
      }],
      "access-control-allow-origin": [{
        key: "Access-Control-Allow-Origin",
        value: "*"
      }],
    },
    body: event.Records[0].cf.request.clientIp,
  };
}
