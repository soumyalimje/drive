// module.exports =   (fn) => {
//   return function (req, res, next) {
//     fn(req, res, next).catch(next);
//   };
// }
module.exports = function wrapAsync(fn) {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};