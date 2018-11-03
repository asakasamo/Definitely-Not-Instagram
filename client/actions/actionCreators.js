// increment the likes
export function increment(index) {
   console.log("Dispatching: Increment likes");
   return {
      type: "INCREMENT_LIKES",
      index
   };
}

// add comment
export function addComment(postId, author, comment) {
   console.log("Dispatching: Add comment");
   return {
      type: "ADD_COMMENT",
      postId,
      author,
      comment
   };
}

// remove comment
export function removeComment(postId, idx) {
   console.log("Dispatching: Remove comment");
   return {
      type: "REMOVE_COMMENT",
      idx,
      postId
   };
}
