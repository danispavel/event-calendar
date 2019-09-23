var ObjectId = require("mongodb").ObjectID;
module.exports = function(app, db) {
  app.delete("/events/:id", (req, res) => {
    const id = req.params.id;
    const details = { _id: new ObjectId(id) };
    db.collection("events").remove(details, (err, item) => {
      if (err) {
        res.send({ error: "An error has occurred" });
      } else {
        res.send(id);
      }
    });
  });
  app.get("/events", (req, res) => {
    db.collection("events")
      .find({})
      .toArray((err, result) => {
        if (err) {
          res.send({ error: "An error has occurred" });
        } else {
          res.send(result);
        }
      });
  });
  app.post("/events", (req, res) => {
    const event = {
      title: req.body.title,
      start: req.body.start,
      duration: req.body.duration,
      id: req.body.id
    };
    db.collection("events").insert(event, (err, result) => {
      if (err) {
        res.send({ error: "An error has occurred" });
      } else {
        res.send(result.ops[0]);
      }
    });
  });
};
