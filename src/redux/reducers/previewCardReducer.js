let initialState = {
  title: "Название статьи (макс.\u00A080\u00A0символов)",
  desc: "Описание материала (макс.\u00A0280\u00A0символов)",
};

export default function previewCardReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
