import mongoose, {Schema} from "mongoose";

type UserFields = {
  name: string;
  description: string;
  age: number;
};

type UserModel = mongoose.Model<UserFields, {}>;

const postSchema = new Schema<UserFields, UserModel>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    age: {
      type: Number,
      required: true,
      min: 1,
      max: 150
    }
  },
  {
    timestamps: true
  }
)

export const Post = mongoose.model<UserFields, UserModel>("Post", postSchema) 