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

  res
    .status(200)
    .set(
      'Content-Security-Policy',
      "default-src 'self' https://*.mapbox.com; base-uri 'self'; block-all-mixed-content; font-src 'self' https:; frame-ancestors 'self'; img-src 'self' blob: data:; object-src 'none'; script-src 'unsafe-inline' https://cdnjs.cloudflare.com https://api.mapbox.com 'self' blob:; style-src 'self' https: 'unsafe-inline'; upgrade-insecure-requests;"
    )
    .render('tour', {
      title: tour.name,
      tour: tour
    });
});

exports.login = catchAsync(async (req, res, next) => {
  res.status(200).render('tour', {
    title: tour.name,
    tour: tour
  });
});
