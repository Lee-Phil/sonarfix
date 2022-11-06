import Link from "next/link";
import React from "react";

const CustomCard = ({ placeholderTitle, placeholderDesc, link }) => {
  return (
    <>
      <Link href={link} className="a">
        <button>
          <div className="landing-card">
            <h3 className="card-header">{placeholderTitle}</h3>
            <div>{placeholderDesc}</div>
          </div>
        </button>
      </Link>
    </>
  );
};

export default CustomCard;
