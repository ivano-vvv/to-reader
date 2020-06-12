const GET_SAVED_TAGS = "GET_SAVED_TAGS";
export function getSavedTags() {
  return {
    type: GET_SAVED_TAGS,
  };
}

const CREATE_TAGS = "CREATE_TAGS";
export function createTags(id, tagsString) {
  return {
    type: CREATE_TAGS,
    id: id,
    tagsString: tagsString,
  };
}

let initialState = {
  tags: [],
  colors: [
    "red",
    "purple",
    "olive",
    "reddish-brown",
    "green",
    "blue",
    "emerald",
    "plum",
    "teal",
    "brown",
  ],
};

export default function tagsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SAVED_TAGS:
      if (!JSON.parse(localStorage.getItem("tags"))) {
        localStorage.setItem("tags", JSON.stringify(state));
      }
      return JSON.parse(localStorage.getItem("tags"));

    case CREATE_TAGS:
      let newTags = createTagObjects(
        checkForOldTags(formateTags(action.tagsString), state),
        state
      );

      let newState = { ...state, tags: [...state.tags, ...newTags] };

      localStorage.setItem("tags", JSON.stringify(newState));

      return JSON.parse(localStorage.getItem("tags"));

      function formateTags(str) {
        return str.split(",").map((t) => t.trim());
      }

      function checkForOldTags(tags, state) {
        return tags.filter((t) => {
          state.tags.forEach((et) => {
            if (compareTags(t, et)) {
              return false;
            }
          });

          return true;

          function compareTags(newTag, existingTag) {
            if (newTag === existingTag.value) {
              return true;
            } else {
              return false;
            }
          }
        });
      }

      function setColor(colors) {
        let i = Math.floor(Math.random() * 10);
        return colors[i];
      }

      function createTagObjects(tagStr, state) {
        let testVar = tagStr.map((t, id = state.tags.length) => {
          id++;
          return {
            id: id,
            value: t,
            color: setColor(state.colors),
          };
        });

        return testVar;
      }

    default:
      return state;
  }
}
