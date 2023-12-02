import { db } from "@/config/firebase";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";

const initialState = {
  showToast: "",
  emailUser: "",
  folderList: [],
  toUpdate: false,
  parentFolderId: "",
};

export const addFolder = createAsyncThunk("Cloud/addFolder", async (folder) => {
  try {
    const docRef = await setDoc(
      doc(db, "Folders", Date.now().toString()),
      folder
    );
  } catch (e) {
    console.error("Error adding document: ", e);
  }
});

export const getFolderList = createAsyncThunk(
  "Cloud/getFolderList",
  async () => {
    const folders = await getDocs(collection(db, "Folders"));
    return folders.docs.map((doc) => {
      return { ...doc.data() };
    });
  }
);

const CloudSlice = createSlice({
  name: "Cloud",
  initialState,
  reducers: {
    setShowToast: (state, action) => {
      state.showToast = action.payload;
    },
    setEmailUser: (state, action) => {
      state.emailUser = action.payload;
    },
    setParentFolderId: (state, action) => {
      state.parentFolderId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFolderList.fulfilled, (state, action) => {
        state.folderList = action.payload;
        state.toUpdate = !state.toUpdate;
      })
      .addCase(addFolder.fulfilled, (state, action) => {
        state.toUpdate = !state.toUpdate;
      });
  },
});

export const { setShowToast, setEmailUser, setParentFolderId } =
  CloudSlice.actions;

export default CloudSlice.reducer;
