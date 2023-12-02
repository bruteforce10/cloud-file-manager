import { useSelector } from "react-redux";
import FolderItem from "./FolderItem";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function FolderList({ folders }) {
  const { data: session } = useSession();

  const router = useRouter();

  const onFolderClick = (item) => {
    router.push({
      pathname: `/folder/${item.id}`,
      query: {
        name: item.name,
        id: item.id,
      },
    });
  };

  // const folderList = [
  //   {
  //     id: 1,
  //     name: "Folder 1",
  //   },
  //   {
  //     id: 2,
  //     name: "Folder 2",
  //   },
  //   {
  //     id: 3,
  //     name: "Folder 3",
  //   },
  // ];

  return (
    <div className="p-5 mt-5 bg-white rounded-lg">
      <h2 className="text[17px] font-bold">
        Recent Folders
        <span className="float-right text-blue-400 font-normal text-[13px]">
          View All
        </span>
      </h2>
      <div
        className="grid grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5 mt-3
        gap-4"
      >
        {folders.map((item, index) => {
          if (session?.user?.email === item.createBy) {
            return (
              <div onClick={() => onFolderClick(item)}>
                <FolderItem key={index} folder={item} />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
