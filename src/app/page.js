import { Suspense } from "react";
import FriendsPage from "./friend/page";

export default async function Home() {
  const res = await fetch("https://cuet-ph-assignment-7.netlify.app/friendsData.json", {cache: 'no-store'});
  const friends = await res.json();


  return (
    <Suspense
      fallback={<div className="flex justify-center items-center"><span className="loading loading-spinner text-info"></span></div>}
    >
      <FriendsPage friends={friends}></FriendsPage>;
    </Suspense>
  );
}
