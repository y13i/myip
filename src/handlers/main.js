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
      "access-control-request-headers": [{
        key: "Access-Control-Request-Headers",
        value: "*"
      }],
      "access-control-request-method": [{
        key: "Access-Control-Request-Method",
        value: "*"
      }],
      "origin": [{
        key: "Origin",
        value: "*"
      }]
    },
    body: event.Records[0].cf.request.clientIp,
  };
}
