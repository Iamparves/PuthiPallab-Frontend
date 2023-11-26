import axios from "axios";

const api = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:3000/api/v1",
  // baseURL: "https://puthipallab.onrender.com/api/v1",
});

export const signup = async (data) => {
  try {
    const res = await api.post("/users/signup", data);
    return res.data;
  } catch (error) {
    return error.response?.data;
  }
};

export const login = async (credentials) => {
  try {
    const res = await api.post("/users/login", credentials);
    return res.data;
  } catch (error) {
    return error.response?.data;
  }
};

export const logout = async () => {
  const res = await api.get("/users/logout");

  return res.data;
};

export const getMe = async () => {
  try {
    const res = await api.get("/users/me");
    return res.data;
  } catch (error) {
    return error.response?.data;
  }
};

export const uploadImage = async (imageFile) => {
  try {
    const ImageData = new FormData();
    ImageData.set("image", imageFile);

    const res = await api.post(
      "https://api.imgbb.com/1/upload?key=96414755e81ac2a7e751fe0575e30c1b",
      ImageData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: false,
      },
    );
    return res.data;
  } catch (error) {
    return error.response?.data;
  }
};

export const getAllGenres = async (query) => {
  try {
    const res = await api.get(`/genres${query ? query : ""}`);
    return res.data.data.genres;
  } catch (error) {
    return error.response?.data;
  }
};

export const addGenre = async (newGenre) => {
  try {
    const res = await api.post("/genres", newGenre);
    return res.data;
  } catch (error) {
    return error.response?.data;
  }
};

export const updateGenre = async ({ genreId, data }) => {
  try {
    const res = await api.patch(`/genres/${genreId}`, data);
    return res.data;
  } catch (error) {
    return error.response?.data;
  }
};

export const deleteGenre = async (genreId) => {
  try {
    const res = await api.delete(`/genres/${genreId}`);
    return res.data;
  } catch (error) {
    return error.response?.data;
  }
};

export const getAllUsers = async (query) => {
  try {
    const res = await api.get(`/users${query ? query : ""}`);
    return res.data.data.users;
  } catch (error) {
    return error.response?.data;
  }
};

export const updateUserRole = async (userId, data) => {
  try {
    const res = await api.patch(`/users/roles/${userId}`, data);
    return res.data;
  } catch (error) {
    return error.response?.data;
  }
};

export const getAllBooks = async (query) => {
  try {
    const res = await api.get(`/books${query ? query : ""}`);
    return res.data.data?.books;
  } catch (error) {
    return error.response?.data;
  }
};

export const addBook = async (newBook) => {
  try {
    const res = await api.post("/books", newBook);
    return res.data;
  } catch (error) {
    return error.response?.data;
  }
};

export const updateBook = async ({ bookId, data }) => {
  try {
    const res = await api.patch(`/books/${bookId}`, data, {
      headers: {
        "Content-Type": "application/json",
        maxRedirects: 0,
      },
    });
    return res.data;
  } catch (error) {
    return error.response?.data;
  }
};

export const deleteBook = async (bookId) => {
  try {
    const res = await api.delete(`/books/${bookId}`);
    return res.data;
  } catch (error) {
    return error.response?.data;
  }
};

export const getAllIssues = async (query) => {
  try {
    const res = await api.get(`/issues${query ? query : ""}`);
    return res.data.data?.issues;
  } catch (error) {
    return error.response?.data;
  }
};

export const getIssue = async (bookId, userId) => {
  try {
    const res = await api.get(`/issues/${bookId}/${userId}`);
    return res.data.data?.issue;
  } catch (error) {
    return error.response?.data;
  }
};

export const issueBook = async (newIssue) => {
  try {
    const res = await api.post("/issues", newIssue);
    return res.data;
  } catch (error) {
    return error.response?.data;
  }
};

export const getAllWaitlist = async (query) => {
  try {
    const res = await api.get(`/waitlist${query ? query : ""}`);
    return res.data.data?.waitlist;
  } catch (error) {
    return error.response?.data;
  }
};
