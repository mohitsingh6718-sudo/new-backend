import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    videoFile: {
      type: String, //cloudinary url
      required: true,
    },
    thumbnail: {
      type: String, //cloudinary url
      required: true,
    },
    title: {
      type: String,
      required: true, //
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video", videoSchema);

// {
//  $sort:{
//    views:-1
//  }
// }

// Aggregate ==>Suppose Database me 10000 Videos hain Tumhe sirf Published Videos chahiye Ya Most Viewed Ya Latest Ya Owner ke hisab se Ye sab Aggregate karta hai

// Pagination==> Suppose 10000 videos hain Kya browser me 10000 bhejna chahiye Nahi Sirf 10 Videos bhejte hain Fir Next Page Fir 10 aur.

// interview question
// ref sirf schema ko batata hai ki ye ObjectId kis collection ko refer karti hai.
// populate() us reference ka use karke actual document fetch karta hai.

// read self
// $match
// $lookup (MongoDB ka JOIN)
// $project
// $sort
// $skip
// $limit
// aggregatePaginate
