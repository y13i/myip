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
      }]
    },
    body: event.Records[0].cf.request.clientIp,
  };
}
