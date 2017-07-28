const mustBeLoggedIn = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send('You must be logged in');
  }
  next();
};

const selfOnly = action => (req, res, next) => {
  if (req.params.id !== req.user.id) {
    return res.status(403).send(`You can only ${action} yourself.`);
  }
  next();
};

// 404 -- not found
// 401 -- unauthorized - you are NOT logged in, you should probably try logging in
// 403 -- forbidden -- you ARE logged in, AND no you cannot see this

const assertAdmin = (req, res, next) => {
 if (!req.user) throwError(401, 'unauthorized')
   if (req.user.userType !== "Admin") throwError(403, 'forbidden')
     next()
 }

 function throwError (status, message) {
   let err = new Error(message)
   err.status = status
   throw err
 }


 const forbidden = message => (req, res) => {
  res.status(403).send(message);
};

// Feel free to add more filters here (suggested: something that keeps out non-admins)

module.exports = { mustBeLoggedIn, selfOnly, forbidden, assertAdmin };
