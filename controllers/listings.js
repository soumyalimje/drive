const Listing = require("../models/listing.js");

module.exports.index=async (req, res) => {
  const allListings = await Listing.find({});
  return res.render("listings/index.ejs", { allListings });
}
module.exports.renderNewForm=(req, res) => {
  // console.log(req.user);
  return res.render("listings/new.ejs");
}
module.exports.showListing=async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id).populate({path: "reviews", populate: {path: "author"},}).populate("owner");
  if(!listing){
    req.flash("error", "Listing you requested does not exist!");
    return res.redirect("/listings");
  }
  return res.render("listings/show.ejs", { listing });
}
module.exports.createListing = async (req, res) => {
  let url = req.file.secure_url;
  let filename = req.file.public_id;
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };
  await newListing.save();
  req.flash("success", "Successfully made a new listing!");
  return res.redirect("/listings");
}
module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing you requested does not exist!");
    return res.redirect("/listings");
  }
  let originalImage = listing.image.url;
  originalImage = originalImage.replace("/upload", "/upload/w_250,c_fill");
  return res.render("listings/edit.ejs", { listing, originalImage });
};
module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  if (typeof req.file !== "undefined") {
    let url = req.file.secure_url;
    let filename = req.file.public_id;
    listing.image = { url, filename };
    await listing.save();
  }
  req.flash("success", "Listing updated successfully!");
  return res.redirect(`/listings/${id}`);
}
module.exports.deleteListing=async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  req.flash("success", "Successfully deleted a listing!");
  console.log(deletedListing);
  return res.redirect("/listings");
}
module.exports.index = async (req, res) => {
  const { search } = req.query;
  let filter = {};

  if (search) {
    filter = {
      $or: [
        { location: { $regex: search, $options: "i" } },
        { country: { $regex: search, $options: "i" } },
        { title: { $regex: search, $options: "i" } },
      ],
    };
  }

  const allListings = await Listing.find(filter);
  res.render("listings/index.ejs", { allListings, search });
};