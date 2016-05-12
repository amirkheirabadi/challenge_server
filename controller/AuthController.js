module.exports = {

   Signup: function(data, callback) {
      console.log(data);
      Model.user.findAll({
         where: {
            user_mobile: data.mobile
         }
      }).then(function(records) {
         if (records.length) {
            return callback(Helper.Errors.UserExists, null);
         } else {
            Model.user.create({
               user_mobile: data.mobile,
               user_password: data.pass
            }).then(function(user) {
               var random_key = Helper.Redis.UserSetRedis(user.get('user_id'));
               return callback(null, random_key);
            });
         }
      });
   },

   Signin: function(data, callback) {
      console.log(data);
      Model.user.findAll({
         where: {
            user_mobile: data.mobile
         }
      }).then(function(records) {
         if (records.length) {
            var random_key = Helper.Redis.UserSetRedis(records[0].dataValues.user_id);
            return callback(null, random_key);
         }
         else {
         	return callback(Helper.Errors.UserExists, null);
         }
      });
   },

   Reminder: function(data, callback) {
      Model.user.findAll({
         where: {
            user_mobile: data.mobile
         }
      }).then(function(user) {
         if (!user.length) {
            return callback(Helper.Errors.UserNotExists, null);
         } else {
            var random_key = Helper.Redis.AuthReminder(user[0].dataValues.user_mobile);
            return callback(null, random_key);
         }
      });
   }
};
