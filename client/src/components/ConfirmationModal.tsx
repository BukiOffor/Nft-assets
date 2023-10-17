import Button from "@/common/Button";
import { orbitron } from "@/fonts/fonts";
import { Modal } from "@/types/marketplace";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const ConfirmationModal = ({ title, body, showModal, setShowModal }: Modal) => {
  return (
    <div className="flex justify-center text-white relative">
      <div
        className="relative w-3/5 flex justify-center flex-col items-center pt-14 pb-5"
        style={{
          background:
            "linear-gradient(150deg, rgba(255, 199, 44, 0.16) 0%, rgba(19, 7, 18, 1) 100%)",
        }}
      >
        <div
          className="absolute top-5 right-10 cursor-pointer"
          onClick={() => setShowModal && setShowModal(!showModal)}
        >
          <FontAwesomeIcon icon={faClose} className="text-primary text-xl" />
        </div>
        <h2 className={`${orbitron.className} text-2xl`}>
          {title || "Congralutaions It&apos;s Yours!"}
        </h2>
        <p>{body}</p>
        <div>
          <Link
            href={"/"}
            className="flex justify-center items-center gap-2 p-3 text-primary"
          >
            <p>View-On Explorer</p>
            <Image
              src="/external-link.svg"
              alt="external-link"
              height={20}
              width={20}
            />
          </Link>
        </div>

        <Button className="flex justify-center items-center gap-2 bg-gradient-linear px-5 py-2">
          <span>Share on Twitter</span>
          <Image
            src="/twitter.svg"
            alt="Twitter Logo"
            className="light:invert"
            width={20}
            height={20}
            priority
          />
        </Button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
