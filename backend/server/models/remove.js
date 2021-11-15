const db = require('../../database');

module.exports = {
  deleteSnome: async (id) => {
    try {
      await db.none(`DELETE FROM snome WHERE id=${id}`);
      return 'Delete Successful';
    } catch(err) {
      console.log(`DATABASE ERROR - DELETE: ${err}`);
      return err;
    }
  },

  deleteUser: async (id) => {
    try {
      await db.none(`DELETE FROM snome_user WHERE id=${id}`);
      return 'Delete Successful';
    } catch(err) {
      console.log(`DATABASE ERROR - DELETE: ${err}`);
      return err;
    }
  }
}