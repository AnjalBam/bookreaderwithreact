export const BookReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [
        ...state,
        {
          title: action.book.title,
          author: action.book.author,
          id: Math.random() * 1000,
        },
      ];
    case "REMOVE_BOOK":
      return state.filter((book) => action.id !== book.id);
    default:
      return state;
  }
};
