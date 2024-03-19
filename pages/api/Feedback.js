import { addPostFeedback } from "@/lib/feedback-util";

export default function Handler(req, res) {
  if (req.method === "POST") {
    addPostFeedback(req.body);
  }
  res.status(200).json({ message: "tahts work" });
}
