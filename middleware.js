const Listing = require("./models/listing");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema ,reviewSchema} = require("./schema.js");
const Review = require("./models/reviews");



module.exports.isLoggedIn = (req, res, next) => {   
    if(!req.isAuthenticated()){
      req.session.returnTo = req.originalUrl;
    req.flash("error", "You must be signed in to create a new listing!");
    return res.redirect("/login");
  }
  next();
};
 
module.exports.saveReturnTo = (req, res, next) => {
  if(req.session.returnTo){
    res.locals.returnTo = req.session.returnTo;
  }
  next();
};

module.exports.isOwner = async (req, res, next) => {
  let { id } = req.params;
  let listing=await Listing.findById(id);
  if(!listing.owner.equals(res.locals.currentUser._id)){
    req.flash("error", "You are not the owner of this listing!");
    return res.redirect(`/listings/${id}`);
  }
  next();
};
module.exports.isReviewOwner = async (req, res, next) => {
  let { id, reviewId } = req.params;
  let review = await Review.findById(reviewId);
  if (!review.author.equals(res.locals.currentUser._id)) {
    req.flash("error", "You are not the owner of this review!");
    return res.redirect(`/listings/${id}`);
  }
  next();
};


module.exports.validateListing = (req, res, next) => {
  let result = listingSchema.validate(req.body);
  console.log(result.error);
  if (result.error) {
    let msg = result.error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, msg);
  } else {
    next();
  }
};

module.exports.validateReview = (req, res, next) => {
  let result = reviewSchema.validate(req.body);
  console.log(result.error);
  if (result.error) {
    let msg = result.error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, msg);
  } else {
    next();
  }
};