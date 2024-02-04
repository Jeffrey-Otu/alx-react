import { initialState, uiReducer } from "./uiReducer";
import { DISPLAY_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";

describe("Testing uiReducer", () => {
  it("verify the state returned by the uiReducer function equals the intial state when no action is passed", () => {
    const res = uiReducer();
    expect(res).toStrictEqual(initialState);
  });

  it("verify the state returned by the uiReducer function equals the initial state when the action SELECT_COURSE is passed", () => {
    const res = uiReducer(undefined, { type: "SELECT_COURSE" });
    expect(res).toStrictEqual(initialState);
  });

  it("verify the state returned by the uiReducer function, when the action DISPLAY_NOTIFICATION_DRAWER is passed, change correctly the isNotificationDrawerVisible property", () => {
    const res = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(res).toStrictEqual({
      ...initialState,
      isNotificationDrawerVisible: true,
    });
  });
});
