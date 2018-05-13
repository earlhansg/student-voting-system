const router = require('express').Router();


const authCheck = (req, res, next) => {
  if(!req.user){
    res.redirect('/auth/login');
  }
  else {
    next();
  }
}
// auth login
router.get('/', authCheck, (req, res) => {
    res.redirect("http://localhost:4200/dashboard");
    // res.redirect('/profile/')
    console.log(req.user);
});


module.exports = router;
