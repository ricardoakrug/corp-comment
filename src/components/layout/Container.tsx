import Header from "./Header";
import FeedbackList from "../feedback/FeedbackList";
import { TFeedbackItem } from "../../utils/types";

type ContainerProps = {
  feedbackItems: TFeedbackItem[];
  isLoading: boolean;
  error: string;
  handleAddToList: (text: string) => void;
};

export default function Container({
  feedbackItems,
  isLoading,
  error,
  handleAddToList,
}: ContainerProps) {
  return (
    <main className="container">
      <Header handleAddToList={handleAddToList} />
      <FeedbackList
        feedbackItems={feedbackItems}
        isLoading={isLoading}
        error={error}
      />
    </main>
  );
}
