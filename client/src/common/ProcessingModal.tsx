import { orbitron } from "@/fonts/fonts";
import { Modal } from "@/types/marketplace";
import { faClose, faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";

const ProcessingModal = ({title, body, showModal, setShowModal}: Modal) => {
  return (
    <div className="flex justify-center text-white">
      <div
        className="relative w-3/5 flex justify-center flex-col items-center pt-14 pb-5"
        style={{
          background:
            "linear-gradient(150deg, rgba(255, 199, 44, 0.16) 0%, rgba(19, 7, 18, 1) 100%)",
        }}
      >
        <div 
        className='absolute top-5 right-10 cursor-pointer' 
        onClick={() => setShowModal && setShowModal(!showModal)}>
          <FontAwesomeIcon icon={faClose} className='text-primary text-xl' />
        </div>
        <h2 className={`${orbitron.className} text-2xl`}>
          {title || "Congratulations It's Yours!"}
        </h2>
        <p>{body}</p>
        <div>
          <Link
            href={"/"}
            className="flex justify-center items-center gap-2 p-3 text-primary"
          >
            <p>View-On Explorer</p>
            {/* <FontAwesomeIcon icon={faExternalLink} /> */}
            <Image 
          src="/external-link.svg" alt="external-link"
                height={20}
                width={20}
                />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProcessingModal;
