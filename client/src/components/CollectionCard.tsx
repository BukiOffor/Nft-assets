import React from "react";
import Image from "next/image";

interface CollectionCardProps {
  title: string;
  source: string;
  children?: React.ReactNode;
}

const CollectionCard: React.FC<CollectionCardProps> = (props) => {
  const { title, source, children } = props;
  console.log(source);
  return (
    <div
      style={{
        background: "#130712",
        borderRadius: "0.5rem",
        border: "1px solid #FFC72C",
      }}
    >
      <div>
        <Image
          src={source}
          alt={"collection"}
          layout="responsive"
          width={200}
          height={200}
          priority
        />
      </div>
      <div className="flex gap-2 tracking-wide p-3">
        <h5>{title}</h5>
        <Image
          src="/outline-badge.svg"
          alt="outline-badge"
          height={20}
          width={20}
          priority
        />
      </div>
      <div className="p-3">{children}</div>
    </div>
  );
};

export default CollectionCard;
