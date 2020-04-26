module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      name: String,
      ingredients:[
                    {
                      quantity:String,
                      name:String,
                      type:String
                    }
                  ],
      steps:[String],
      timer:[Number],
      ImageURL: String,
      OriginalURL:String,
      published:Boolean
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });
  

  const Recipe = mongoose.model("recipe", schema);
  return Recipe;
};
