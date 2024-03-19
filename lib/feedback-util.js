import fs from "fs";
import path from "path";

const DataDirectory = path.join(process.cwd(), "data", "feedbacks.json");

export const getPostFeedbacks = (slug) => {
  const Posts = fs.readFileSync(DataDirectory);
  const Feedbacks = JSON.parse(Posts);
  return Feedbacks.filter((post) => JSON.parse(post).slug === slug);
};

export const addPostFeedback = (data) => {
  const FeedbackData = fs.readFileSync(DataDirectory);
  const newData = JSON.parse(FeedbackData);
  newData.push(data);
  fs.writeFileSync(DataDirectory, JSON.stringify(newData));
};
