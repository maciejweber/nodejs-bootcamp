const Tour = require('./../models/tourModel');
const catchAsync = require('../utlis/catchAsync');

exports.getOverview = catchAsync(async (req, res) => {
  const tours = await Tour.find();

  res.status(200).render('overview', {
    title: 'All Tours',
    tours: tours
  });
});

exports.getTour = catchAsync(async (req, res) => {
  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    fields: 'review rating user'
  });

  //Refused to apply inline style because it violates the following Content Security Policy directive: "style-src
  res.status(200).render('tour', {
    title: tour.name,
    tour: tour
  });
});

exports.getLoginForm = catchAsync(async (req, res, next) => {
  res.status(200).render('login', {
    title: 'Log into you account'
  });
});
