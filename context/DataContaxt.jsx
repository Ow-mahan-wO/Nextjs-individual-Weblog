import { createContext, useContext, useState } from "react";

const Context = createContext();
const DataContaxt = ({ children }) => {
  const [feedbackStatus, setFeedbackStatus] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredPosts, setFilteredPosts] = useState(undefined);

  return (
    <Context.Provider
      value={{
        feedbackStatus,
        setIsModalOpen,
        isModalOpen,
        setFeedbackStatus,
        filteredPosts,
        setFilteredPosts,
      }}>
      {children}
    </Context.Provider>
  );
};

function useDataContext() {
  const data = useContext(Context);
  return data;
}

export { DataContaxt, useDataContext };
