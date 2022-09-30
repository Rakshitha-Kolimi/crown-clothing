
import { createSelector } from "reselect";
import { UserState } from "./user.reducer";

type State = {
user: UserState
}
export const selectUserReducer = (state:State):UserState => state.user;
 
export const selectCurrentUser = createSelector(
    [selectUserReducer],
    user => user.currentUser
)
