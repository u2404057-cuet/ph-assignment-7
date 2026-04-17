import Image from "next/image";
import Link from "next/link";
import React from "react";

const FriendCard = ({ friend }) => {
  const {id, name, picture, days_since_contact, status, tags } = friend;
  return (
    <Link href={`/friend/${id}`}>
      <div className="text-center bg-base-300 shadow rounded-2xl p-6">
        <div className="flex justify-center">
          <Image
            src={picture}
            alt={name}
            width={80}
            height={80}
            className="rounded-full"
          ></Image>
        </div>
        <h1 className="font-semibold text-xl">{name}</h1>
        <p className="">{days_since_contact}d ago</p>
        <div className="">
          {tags.map((tag, i) => (
            <div key={i} className="badge badge-soft badge-success">
              {tag}
            </div>
          ))}
        </div>
        <div
          className={`badge badge-soft ${
            status == "overdue"
              ? "badge-error"
              : status == "on-track"
              ? "badge-success"
              : "badge-warning"
          }`}
        >
          {status}
        </div>
      </div>
    </Link>
  );
};

export default FriendCard;
