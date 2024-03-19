import styles from "./postHeader.module.css";

import Image from "next/image";
import Modal from "../ui/Modal";
import Form from "../SendFeedback/Form";
import Button from "../ui/Button";

import { useDataContext } from "@/context/DataContaxt";

const PostHeader = ({ imagePath, title }) => {
  const { isModalOpen, setIsModalOpen } = useDataContext();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.coverContainer}>
          <Image
            src={imagePath}
            width={400}
            height={400}
            alt={`${title}-image`}
          />
        </div>
        <h1>{title}</h1>
        <Button outline={true} onClick={() => setIsModalOpen(true)}>
          i want to Feedback
        </Button>
      </div>
      {isModalOpen && (
        <Modal>
          <Form />
        </Modal>
      )}
    </>
  );
};

export default PostHeader;
