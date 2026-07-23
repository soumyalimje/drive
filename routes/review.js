const express = require("express");
const Review = require("../models/reviews.js");
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const router = express.Router({ mergeParams: true });
const { validateReview, isLoggedIn, isReviewOwner} = require("../middleware.js");
const reviewController= require("../controllers/reviews.js");

//post route for reviews
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.createReview));

//delete/destroy route for reviews
router.delete("/:reviewId",isLoggedIn,isReviewOwner, wrapAsync(reviewController.deleteReview));

module.exports = router;
