function postComments(state = [], action) {
   console.log(action.idx);
   switch (action.type) {
      case "ADD_COMMENT":
         console.log("Adding a comment");
         return [
            ...state,
            {
               user: action.author,
               text: action.comment
            }
         ];

      case "REMOVE_COMMENT":
         console.log("Removing a comment");
         return [...state.slice(0, action.idx), ...state.slice(action.idx + 1)];

      default:
         return state;
   }

   return state;
}

function comments(state = [], action) {
   if (action.postId) {
      return {
         // take the current state
         ...state,
         // overwrite this post with a new one
         [action.postId]: postComments(state[action.postId], action)
      };
   }
   return state;
}

export default comments;
