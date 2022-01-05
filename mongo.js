const mongoose = require("mongoose");

const Mongo = {
  async Connect() {
    try {
      await mongoose.connect(
        "mongodb+srv://admin:1234@lakshman.4dwgr.mongodb.net/mentor?retryWrites=true&w=majority"
      );

      console.log(`Mongo DB Connected successfully...`);
    } catch (err) {
      console.log(`error connecting th db ${err}`);
    }
  },
};

module.exports = Mongo;
