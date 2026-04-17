import CardCounter from "@/components/CardCounter";
import FriendCard from "@/components/FriendCard";
import React from "react";
import { FaPlus } from "react-icons/fa6";

const FriendsPage = ({ friends = [] }) => {
  return (
    <div className="container mx-auto space-y-10 mb-20">
      <div className="text-center space-y-7 border-b pb-7 border-gray-200">
        <h1 className="font-bold text-5xl">
          Friends to keep close in your life
        </h1>
        <p className="opacity-70">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br /> relationships that matter most.
        </p>
        <button className="btn bg-green-900 text-white">
          <FaPlus />
          Add a Friend
        </button>
        <CardCounter friends={friends}></CardCounter>
      </div>
      <p className="font-bold text-2xl">Your Friends</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend}></FriendCard>
        ))}
      </div>
    </div>
  );
};

export default FriendsPage;
