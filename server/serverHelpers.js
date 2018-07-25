import Promise from 'bluebird';

import { db } from '../database/connection.js';

const getAggregate = (product) => {
  return new Promise((resolve) => {
    db.query(`SELECT score, qty FROM aggregates WHERE product_id=${product};`, (err, data) => {
      if (err) return 404;
      resolve(data);
    });
  });
};

const getReviews = (product) => {
  return new Promise((resolve) => {
    db.query(`SELECT * FROM reviews INNER JOIN users ON reviews.user_id=users.id WHERE product_id=${product}`, (err, data) => {
      if (err) return 404;
      resolve(data);
    });
  });
};

const getImages = (reviews) => {
  let queryString = '';
  return new Promise((resolve) => {
    reviews.forEach((review) => {
      queryString += `SELECT * FROM images WHERE id=${review.id};\n`;
    });
    db.query(queryString, (err, data) => {
      if (err) return 404;
      resolve(data);
    });
  });
};

const getComments = (review) => {
  return new Promise((resolve) => {
    db.query(`SELECT * FROM comments WHERE review_id=${review};`, (err, data) => {
      if (err) return 404;
      resolve(data);
    });
  });
};

const addReview = (review) => {
// add users record if new
// add reviews record (w/ foreign key user_id)
// add images record if applicable (w/ foreign key review_id)
// update/get aggregates
};

const addComment = (comment) => {
// add users record if new
// add comment record (w/ foreign key user_id)
};

const updateReview = (category) => {
// increment/decrement helpful, not_helpful, or abuse in review record
};

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
