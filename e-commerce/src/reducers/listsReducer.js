
export default (state = [], action) => {
   switch (action.type) {
    case 'ON_TERM_CHANGE':
        return action.payload;
    default:
        return state;
   }
  
}