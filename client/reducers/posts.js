function posts(state = [], action) {
   // console.log("Posts reducer!", state, action);

   switch (action.type) {
      case "INCREMENT_LIKES":
         console.log("Incrementing likes");
         const i = action.index;
         return [
            ...state.slice(0, i), // before the one we're updating
            { ...state[i], likes: state[i].likes + 1 },
            ...state.slice(i + 1) // after the one we're updating
         ];

      // return the updated state
      default:
         return state;
   }

   return state;
}

export default posts;
