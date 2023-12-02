import Image from "next/image";
import { Inter } from "next/font/google";
import SearchBar from "@/components/SearchBar";
import FolderList from "@/components/Folder/FolderList";
import { useDispatch, useSelector } from "react-redux";
import Toast from "@/components/Toast";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import {
  getFolderList,
  setEmailUser,
  setParentFolderId,
} from "@/config/producers/CloudSlice";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { showToast, parentFolderId, folderList, toUpdate } = useSelector(
    (state) => state.cloudReducer
  );
  const { data: session } = useSession();
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!session) {
      router.push("/login");
    } else {
      dispatch(setEmailUser(session?.user?.email));
      dispatch(getFolderList());
    }
    dispatch(setParentFolderId(0));
  }, [toUpdate]);

  return (
    <main className="bg-sky-100 h-full p-5">
      <SearchBar />
      <FolderList folders={folderList} />
      {showToast && <Toast />}
    </main>
  );
}
