import Image from "next/image";
import React from "react";
import SendBtn from "@Icons/send-button.svg";
import EmojiIcon from "@Icons/emoji-icon.svg";
import AttachmentClip from "@Icons/attachment-clip.svg";

const ChatBox = () => {
  return (
    <>
      <div className="w-full bg-white shadowBox rounded-xl p-2">
        <div className="overflow-y-scroll h-[200px]">
          <div className="mb-4 shadowBox rounded">
            <div className="bg-gray-100 p-3 rounded-md">
              <h2 className="text-sm font-bold">Nurse</h2>
              <p className="text-gray-700 text-xs">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>

          <div className="mb-4 shadowBox rounded-md">
            <div className="bg-teal text-white p-3 rounded-md">
              <p className="font-bold text-sm">Admin_1</p>
              <p className="text-xs">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>

          <div className="mb-4 shadowBox rounded">
            <div className="bg-gray-100 p-3 rounded-md">
              <h2 className="text-sm font-bold">Nurse</h2>
              <p className="text-gray-700 text-xs">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
        </div>

        <hr />

        <div className="flex justify-center items-center mt-3">
          <input
            className="w-full rounded-md text-xs resize-none focus:outline-none"
            placeholder="Enter your message..."
          />
          <button className="rounded-md text-white">
            <Image src={SendBtn} alt="sendbtn" className="w-7" />
          </button>
        </div>

        <div className="flex items-center mt-2">
          <button className=" p-2 rounded-full hover:bg-gray-200">
            <Image src={EmojiIcon} alt="" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-200">
            <Image src={AttachmentClip} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatBox;
