import Image from "next/image";
import { RiNotificationSnoozeFill } from "react-icons/ri";
import { FaArchive } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import CheckIn from "@/components/CheckIn";

const FriendDetailsPage = async ({ params }) => {
  const { friendId } = await params;
  const res = await fetch("http://localhost:3000/friendsData.json", {
    cache: "no-store",
  });
  const friends = await res.json();

  const friend = friends.find((f) => f.id == friendId);

  const {
    name,
    picture,
    next_due_date,
    goal,
    tags,
    status,
    days_since_contact,
    email,
  } = friend;

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-5 container mx-auto mb-20">
      <div className="md:col-span-2 col-span-1 row-span-2">
        <div className="bg-base-300 flex flex-col items-center p-4 rounded-2xl">
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
          <div className="">
            {tags.map((tag, i) => (
              <div key={i} className="badge badge-soft badge-success">
                {tag}
              </div>
            ))}
          </div>
          <p className="">Email : {email}</p>
        </div>
      </div>
      <div className="bg-base-300 rounded-2xl flex flex-col text-center items-center justify-center p-4">
        <h2 className="font-semibold text-3xl">{goal}</h2>
        <p className="">Goal (Days)</p>
      </div>
      <div className="bg-base-300 rounded-2xl flex flex-col text-center items-center justify-center p-4">
        <h2 className="font-semibold text-3xl">{days_since_contact}</h2>
        <p className="">Days Since Contact</p>
      </div>
      <div className="bg-base-300 rounded-2xl flex flex-col text-center items-center justify-center p-4">
        <h2 className="font-semibold text-3xl">{next_due_date}</h2>
        <p className="">Next Due</p>
      </div>
      <div className="md:col-span-3 col-span-1 flex flex-col md:flex-row rounded-2xl justify-center md:justify-between p-4 bg-base-300 items-center">
        <div className="">
          <h3 className="text-lg">Relationship Goal</h3>
          <p className="">
            Connect every <span className="font-bold">{goal} days</span>
          </p>
        </div>
        <button className="btn">Edit</button>
      </div>
      <div className="md:col-span-2 col-span-1 p-4">
        <div className="flex flex-col gap-3">
          <button className="btn">
            <RiNotificationSnoozeFill />
            Snooze 2 weeks
          </button>
          <button className="btn">
            <FaArchive />
            Archive
          </button>
          <button className="btn text-red-500">
            <MdDeleteOutline className="text-2xl" />
            Delete
          </button>
        </div>
      </div>
      <div className="md:col-span-3 col-span-1 p-4 bg-base-300 flex flex-col rounded-2xl">
        <CheckIn name={name}></CheckIn>
      </div>
    </div>
  );
};

export default FriendDetailsPage;
