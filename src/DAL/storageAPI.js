export function getSavedArticlesAPI() {
  return JSON.parse(localStorage.getItem("articlesPack"));
}

export function getSavedTagsAPI(state) {
  if (!JSON.parse(localStorage.getItem("tags"))) {
    localStorage.setItem("tags", JSON.stringify(state));
  }
  return JSON.parse(localStorage.getItem("tags"));
}

export function saveArticleAPI(articleData) {
  if (articleData.tags) {
    let newTags = createNewTags(articleData.tags, getSavedTagsAPI());

    localStorage.setItem("tags", JSON.stringify(newTags));
  }

  let tempArticlesState = JSON.parse(localStorage.getItem("articlesPack"));

  let articleDataWithTagsId = {
    link: articleData.link,
    title: articleData.title,
    desc: articleData.desc,
    cover: articleData.cover,
    tags: articleData.tags ? getTagsId(getSavedTagsAPI().tags, articleData.tags) : null,
  };

  let id = Math.round(Math.random() * 1000000);

  tempArticlesState.push({
    id: id,
    ...articleDataWithTagsId,
  });
  localStorage.setItem("articlesPack", JSON.stringify(tempArticlesState));

  // functions

  function createNewTags(tagsStr, tagsState) {
    let newTags = createTagObjects(
      filterNewTags(formateTags(tagsStr), tagsState.tags),
      tagsState
    );

    return { ...tagsState, tags: [...tagsState.tags, ...newTags] };

    // functions

    function formateTags(str) {
      return str.split(",").map((t) => t.trim());
    }

    function filterNewTags(tags, state) {
      if (state.length === 0) return tags;

      return tags.filter((t) => {
        if (compareTags(t, state)) {
          return false;
        } else {
          return true;
        }
      });

      function compareTags(newTag, state) {
        for (let i = 0; i < state.length; i++) {
          if (newTag === state[i].value) {
            return true;
          }
        }

        return false;
      }
    }

    function setColor(colors) {
      let i = Math.floor(Math.random() * 10);
      return colors[i];
    }

    function createTagObjects(newTags, tagsState) {
      let id = Math.round(Math.random() * 1000000);
      return newTags.map((t) => {
        id++;
        return {
          id: id,
          value: t,
          color: setColor(tagsState.colors),
        };
      });
    }
  }

  function getTagsId(tags, tagsStr) {
    let result = [],
      tagArray = formateTags(tagsStr);

    tagArray.map((t) => {
      for (let i = 0; i < tags.length; i++) {
        if (t === tags[i].value) {
          result.push(tags[i].id);
        }
      }
    });

    return result;

    function formateTags(str) {
      return str.split(",").map((t) => t.trim());
    }
  }
}

export function deleteArticleAPI(articleId) {
  let tempState = getSavedArticlesAPI();
  let newState = tempState.filter((i) => i.id !== articleId);
  localStorage.setItem("articlesPack", JSON.stringify(newState));
  return getSavedArticlesAPI();
}
