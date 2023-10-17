export type Modal = {
  title?: String;
  body: String;
  showModal?: boolean;
  setShowModal?: React.Dispatch<React.SetStateAction<boolean>>;
};
