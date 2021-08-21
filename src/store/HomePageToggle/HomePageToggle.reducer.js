export default function homePageToggleReducer(state = false, action) {
  switch(action.type) {
    case 'HOME_PAGE_CLICKED':
      return true
    case 'HOME_PAGE_CLICK_RESET':
      return false
    default:
      return state
  }
} 