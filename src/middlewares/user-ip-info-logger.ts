const UserIpInfoLogger = async (req, res, next) => {
  console.log('UserIpInfoLogger', req.ipInfo);
  req.requestInfo = {
    userData: {
      ip: req.ipInfo.ip,
      city: req.ipInfo.city,
      country: req.ipInfo.country,
      region: req.ipInfo.region,
    },
    method: req.method,
    originalUrl: req.originalUrl,
  };
  next();
};

export default UserIpInfoLogger;