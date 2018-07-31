import Promise from 'bluebird';

import { db } from '../database/connection';

const getAggregate = productId => new Promise((resolve) => {
  db.query(`SELECT * FROM aggregates WHERE product_id=${productId};`, (err, data) => {
    if (err) return 404;
    resolve(data);
  });
});

const getReviews = (product, callback) => new Promise((resolve) => {
  db.query(`SELECT * FROM reviews INNER JOIN users ON reviews.user_id=users.id WHERE product_id=${product}`, (err, data) => {
    if (err) return 404;
    resolve(callback(data));
  });
});

const getImages = (reviews) => {
  const results = {};
  results.reviews = reviews;
  let queryString = '';
  return new Promise((resolve) => {
    reviews.forEach((review) => {
      queryString += `SELECT review_id, title, url FROM images WHERE review_id=${review.id};`;
    });
    db.query(queryString, (err, data) => {
      if (err) return 404;
      results.images = data;
      resolve(results);
    });
  });
};

// TODO: complete
const getComments = review => new Promise((resolve) => {
  db.query(`SELECT * FROM comments WHERE review_id=${review};`, (err, data) => {
    if (err) return 404;
    resolve(data);
  });
});

// TODO: complete
const addReview = (review) => {
// add users record if new
// add reviews record (w/ foreign key user_id)
// add images record if applicable (w/ foreign key review_id)
// update/get aggregates
};

// TODO: complete
const addComment = (comment) => {
// add users record if new
// add comment record (w/ foreign key user_id)
};

// TODO: complete
const updateReview = (category) => {
// increment/decrement helpful, not_helpful, or abuse in review record
};

// TODO: complete
const reportComment = (abuse) => {
// increment abuse in comment record
};

export {
  getAggregate,
  getReviews,
  getImages,
  getComments,
  addReview,
  addComment,
  updateReview,
  reportComment,
};
