import axios from "axios";

const api = axios.create({
  withCredentials: true,
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

// Auth
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
  const res = await api.post("/users/logout");

  return res.data;
};

export const verifyEmail = async (token) => {
  try {
    const res = await api.patch(`/users/verifyEmail/${token}`);
    return res.data;
  } catch (error) {
    return error.response?.data;
  }
};

export const resendVerificationEmail = async (data) => {
  try {
    const res = await api.post("/users/resendVerificationEmail", data);
    return res.data;
  } catch (error) {
    return error.response?.data;
  }
};

export const forgotPassword = async (data) => {
  try {
    const res = await api.post("/users/forgotPassword", data);
    return res.data;
  } catch (error) {
    return error.response?.data;
  }
};

export const resetPassword = async (token, data) => {
  try {
    const res = await api.patch(`/users/resetPassword/${token}`, data);
    return res.data;
  } catch (error) {
    return error.response?.data;
  }
};

// Me
export const getMe = async () => {
  try {
    const res = await api.get("/users/me");
    return res.data;
  } catch (error) {
    return error.response?.data;
  }
};

export const updateMe = async (userData) => {
  try {
    const res = await api.patch("/users/updateMe", userData);
    return res.data;
  } catch (error) {
    return error.response?.data;
  }
};

export const updateMyPassword = async (passwords) => {
  try {
    const res = await api.patch("/users/updateMyPassword", passwords);
    return res.data;
  } catch (error) {
    return error.response?.data;
  }
};

// Image Upload (ImgBB)
export const uploadImage = async (imageFile) => {
  try {
    const ImageData = new FormData();
    ImageData.set("image", imageFile);

    const res = await axios.post(
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

// Genres
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

export const updateGenre = async ({ genreId, genreData }) => {
  try {
    const res = await api.patch(`/genres/${genreId}`, genreData);
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

// Users
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

// Book
export const getBooksPaginated = async ({
  search,
  page,
  limit,
  bookLanguage,
  genres,
}) => {
  try {
    const queryString = `/books?search=${search}&page=${page}&limit=${limit}&bookLanguage=${bookLanguage}&genres=${genres}`;
    const res = await api.get(queryString);

    const totalPages = Math.ceil(res.data?.total / limit) || 1;
    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;

    return {
      books: res.data.data?.books,
      hasNextPage,
      hasPrevPage,
      totalPages,
      results: res.data?.results,
      totalBooks: res.data?.total,
    };
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

export const getBookById = async (bookId) => {
  try {
    const res = await api.get(`/books/${bookId}`);
    return res.data.data?.book;
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

// Issues
export const getAllIssues = async (query) => {
  try {
    const res = await api.get(`/issues${query ? query : ""}`);
    return res.data.data?.issues;
  } catch (error) {
    return error.response?.data;
  }
};

export const getMyIssues = async (query) => {
  try {
    const res = await api.get(`/issues/myIssues${query ? query : ""}`);
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

export const returnBook = async (data) => {
  try {
    const res = await api.patch("/issues", data);
    return res.data;
  } catch (error) {
    return error.response?.data;
  }
};

// Waitlist
export const getAllWaitlist = async (query) => {
  try {
    const res = await api.get(`/waitlist${query ? query : ""}`);
    return res.data.data?.waitlist;
  } catch (error) {
    return error.response?.data;
  }
};

export const getMyWaitlist = async () => {
  try {
    const res = await api.get("/waitlist/myWaitlist");
    return res.data.data?.waitlist;
  } catch (error) {
    return error.response?.data;
  }
};

export const joinWaitlist = async (bookId) => {
  try {
    const res = await api.post("/waitlist", { book: bookId });
    return res.data;
  } catch (error) {
    return error.response?.data;
  }
};

export const leaveWaitlist = async (bookId) => {
  try {
    const res = await api.patch("/waitlist", { book: bookId });
    return res.data;
  } catch (error) {
    return error.response?.data;
  }
};

// Reviews
export const getAllReviews = async (query) => {
  try {
    const res = await api.get(`/reviews${query ? query : ""}`);
    return res.data.data?.reviews;
  } catch (error) {
    return error.response?.data;
  }
};

export const getMyReviews = async () => {
  try {
    const res = await api.get("/reviews/myReviews");
    return res.data.data?.reviews;
  } catch (error) {
    return error.response?.data;
  }
};

export const addReview = async (newReview) => {
  try {
    const res = await api.post("/reviews", newReview);
    return res.data;
  } catch (error) {
    return error.response?.data;
  }
};

export const updateReviewFn = async ({ reviewId, data }) => {
  try {
    const res = await api.patch(`/reviews/${reviewId}`, data);
    return res.data;
  } catch (error) {
    return error.response?.data;
  }
};

export const deleteReview = async (reviewId) => {
  try {
    const res = await api.delete(`/reviews/${reviewId}`);
    return res.data;
  } catch (error) {
    return error.response?.data;
  }
};

// Overview
export const getLibrarianOverview = async () => {
  try {
    const res = await api.get("/overview");
    return res.data;
  } catch (error) {
    return error.response?.data;
  }
};

export const getMemberOverview = async () => {
  try {
    const res = await api.get("/overview/me");
    return res.data;
  } catch (error) {
    return error.response?.data;
  }
};

// Contact
export const sendContactMessage = async (data) => {
  try {
    const res = await api.post("/contact", data);
    return res.data;
  } catch (error) {
    return error.response?.data;
  }
};
