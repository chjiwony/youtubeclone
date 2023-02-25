export const localsMiddleware = (req, res, next) => {
  //   if(req.session.loggedIn){
  //     res.loclas.loggedIn = true  }
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.siteName = "YoutubeClone";
  res.locals.loggedInUser = req.session.user;
  next();
};
