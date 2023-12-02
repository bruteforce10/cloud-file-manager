import { addFolder, setShowToast } from "@/config/producers/CloudSlice";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { document } from "postcss";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CreateFolderModal({ closeModal }) {
  const [folderName, setFolderName] = React.useState("");
  const { data: session } = useSession();
  const { parentFolderId } = useSelector((state) => state.cloudReducer);
  const dispatch = useDispatch();

  const onCreate = async () => {
    dispatch(
      addFolder({
        name: folderName,
        id: Date.now().toString(),
        createBy: session?.user?.email,
        parentFolderId: parentFolderId,
      })
    );
    setFolderName("");
    closeModal();
    dispatch(setShowToast("Folder created successfully"));
  };

  return (
    <div>
      <div className="modal-box bg-white">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div
          className="w-full items-center 
        flex flex-col justify-center gap-3"
        >
          <Image src="/folder.png" alt="folder" width={50} height={50} />
          <input
            type="text"
            placeholder="Folder Name"
            value={folderName}
            className="p-2 border-[1px] outline-none
                rounded-md"
            onChange={(e) => setFolderName(e.target.value)}
          />
          <button
            className="bg-blue-500
          text-white rounded-md p-2 px-3 w-full"
            onClick={() => onCreate()}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
