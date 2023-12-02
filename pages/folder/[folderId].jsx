import FolderList from "@/components/Folder/FolderList";
import SearchBar from "@/components/SearchBar";
import Toast from "@/components/Toast";
import {
  getFolderList,
  setParentFolderId,
} from "@/config/producers/CloudSlice";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function FolderDetails() {
  const router = useRouter();
  const { name, id } = router.query;
  const dispatch = useDispatch();
  const { parentFolderId, showToast, folderList, toUpdate } = useSelector(
    (state) => state?.cloudReducer
  );
  const [subFolderList, setSubFolderList] = React.useState([]);

  useEffect(() => {
    dispatch(setParentFolderId(id));
  }, [folderList]);

  useEffect(() => {
    dispatch(getFolderList());
    if (folderList.length > 0) {
      setSubFolderList(
        folderList.filter((folder) => folder.parentFolderId === id)
      );
    }
  }, [parentFolderId, toUpdate]);

  return (
    <main className="bg-sky-100 h-full p-5">
      <SearchBar />
      <h2 className="text-[20px] font-bold mt-5">{name}</h2>

      {subFolderList.length > 0 && <FolderList folders={subFolderList} />}

      {showToast && <Toast />}
    </main>
  );
}
