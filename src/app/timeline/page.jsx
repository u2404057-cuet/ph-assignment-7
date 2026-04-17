"use client";
import { FriendsContext } from "@/context/FriendsProvider";
import Image from "next/image";
import { useContext, useState } from "react";
import img1 from "../../../public/asset/call.png";
import img2 from "../../../public/asset/text.png";
import img3 from "../../../public/asset/video.png";

const TimelinePage = () => {
  const { timeline } = useContext(FriendsContext);
  const [callType, setCallType] = useState("");

  const handleSelectType = (e) => {
    setCallType(e.target.value);
  };

  const filteredTimeline = callType
    ? timeline.filter((t) => t.type === callType)
    : timeline;

  return filteredTimeline.length === 0 ? (
    <div className="flex items-center justify-center h-80 bg-base-300 mb-20 container mx-auto rounded-2xl">
      <p className="text-5xl font-bold">Timeline is empty</p>
    </div>
  ) : (
    <div className="space-y-4 container mx-auto mb-20">
      <h1 className="font-bold text-5xl">Timeline</h1>
      <select value={callType} onChange={handleSelectType} className="select">
        <option disabled={true} value="">
          Pick a color
        </option>
        <option value="call">call</option>
        <option value="text">text</option>
        <option value="video">video</option>
      </select>
      <div className="space-y-2">
        {filteredTimeline.map((singleTimeline, index) => (
          <div key={index} className="flex gap-2 p-4 bg-base-300 rounded-2xl">
            <div className="">
              <Image
                src={
                  singleTimeline.type == "call"
                    ? img1
                    : singleTimeline.type == "text"
                    ? img2
                    : img3
                }
                alt={singleTimeline.name}
                width={40}
                height={40}
              ></Image>
            </div>
            <div className="">
              <h3 className="">
                <span className="font-bold">{singleTimeline.type}</span> with{" "}
                {singleTimeline.name}
              </h3>
              <p className="">{singleTimeline.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelinePage;
