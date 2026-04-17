import Image from "next/image";
import friendsData from "../../../../public/friendsData.json";

const FriendDetailsPage = async ({ params }) => {
  const { friendId } = await params;
  const friends = friendsData;

  const friend = friends.find((f) => f.id == friendId);
  const {
    name,
    picture,
    next_due_date,
    goal,
    bio,
    tags,
    status,
    days_since_contact,
    email,
  } = friend;

  return (
    <div className="grid grid-cols-5 gap-5 container mx-auto mb-20">
      <div className="col-span-2 row-span-2">
        <div className="bg-base-200 flex flex-col items-center p-4 rounded-2xl">
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
      <div className="bg-base-200 rounded-2xl flex flex-col items-center justify-center p-4">
        <h2 className="font-semibold text-3xl">{goal}</h2>
        <p className="">Goal (Days)</p>
      </div>
      <div className="bg-base-200 rounded-2xl flex flex-col items-center justify-center p-4">
        <h2 className="font-semibold text-3xl">{days_since_contact}</h2>
        <p className="">Days Since Contact</p>
      </div>
      <div className="bg-base-200 rounded-2xl flex flex-col items-center justify-center p-4">
        <h2 className="font-semibold text-3xl">{next_due_date}</h2>
        <p className="">Next Due</p>
      </div>
      <div className="col-span-3 flex justify-between p-4 bg-base-200 items-center">
        <div className="">
          <h3 className="text-lg">Relationship Goal</h3>
          <p className="">Connect every <span className="font-bold">{goal} days</span></p>
        </div>
        <button className="btn">Edit</button>
      </div>
      <div className="col-span-2 p-4">
        <div className="flex flex-col gap-3">
          <button className="btn">Snooze 2 weeks</button>
          <button className="btn">Archive</button>
          <button className="btn">Delete</button>
        </div>
      </div>
      <div className="col-span-3 p-4 bg-base-200 flex flex-col">
        <h3 className="text-lg">Quick Check-In</h3>
        <div className=" grid grid-cols-3 gap-4 flex-1">
          <button className="btn h-full ">Call</button>
          <button className="btn h-full">Text</button>
          <button className="btn h-full">Video</button>
        </div>
      </div>
    </div>
  );
};

export default FriendDetailsPage;
