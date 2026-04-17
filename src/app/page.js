import friendsData from "../../public/friendsData.json";
import FriendsPage from "./friend/page";

export default function Home() {

  const friends = friendsData;

  console.log(friends);

  return <FriendsPage friends={friends}></FriendsPage>;
}
