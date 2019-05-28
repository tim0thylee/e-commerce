export default (state = [], action) => {
   switch (action.type) {
    case 'ON_TERM_CHANGE':
        return action.payload;
    case 'REMOVE_LIST':
        return state.filter(item => item.id !== action.payload);
    default:
        return state;
   }
}