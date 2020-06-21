// connection to the Storage

function getArticlesFromStorage() {
  return JSON.parse(localStorage.getItem("articlesPack"));
}

export function getSavedArticlesAPI(filter) {
  // filter = { tags: [], isFirstList: false, isReadList: false, isUnreadList: false }

  let resultArticlePack = getArticlesFromStorage();

  if (filter.tags.length !== 0) {
    resultArticlePack = resultArticlePack.filter((a) => {
      for (let i = 0; i < a.tags.length; i++) {
        for (let j = 0; j < filter.tags.length; j++) {
          if (a.tags[i] === filter.tags[j].id) return true;
        }
      }

      return false;
    });
  }

  if (filter.isReadList) {
    resultArticlePack = resultArticlePack.filter((a) => {
      if (a.isRead) return true;
    });
  }

  if (filter.isUnreadList) {
    resultArticlePack = resultArticlePack.filter((a) => {
      if (!a.isRead) return true;
    });
  }

  if (filter.isFirstList) {
    resultArticlePack = resultArticlePack.filter((a) => {
      if (a.isFirstList) return true;
    });
  }

  return resultArticlePack;
}

export function switchFirstListArticleStatusAPI(id, filter) {
  let articlesPack = getArticlesFromStorage(),
    firstListItemsAmount = getFirstListItemsAmountAPI(),
    articleIndex = getArticleIndex(articlesPack, id);

  if (articlesPack[articleIndex].isFirstList) {
    articlesPack[articleIndex].isFirstList = !articlesPack[articleIndex]
      .isFirstList;
  } else {
    if (firstListItemsAmount < 6) {
      articlesPack[articleIndex].isFirstList = true;
    }
  }

  localStorage.setItem("articlesPack", JSON.stringify(articlesPack));

  return getSavedArticlesAPI(filter);
}

export function switchHaveReadListArticleStatusAPI(id, filter) {
  let articlesPack = getArticlesFromStorage(),
    articleIndex = getArticleIndex(articlesPack, id);

  if (!articlesPack[articleIndex].isRead) {
    articlesPack[articleIndex].isRead = true;
  } else {
    articlesPack[articleIndex].isRead = !articlesPack[articleIndex].isRead;
  }

  localStorage.setItem("articlesPack", JSON.stringify(articlesPack));

  return getSavedArticlesAPI(filter);
}

export function getFirstListItemsAmountAPI() {
  let firstList = getArticlesFromStorage().filter((a) => a.isFirstList);
  return firstList.length;
}

function getArticleIndex(articlesPack, id) {
  for (let i = 0; i < articlesPack.length; i++) {
    if (articlesPack[i].id === id) return i;
  }
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
    tags: articleData.tags
      ? getTagsId(getSavedTagsAPI().tags, articleData.tags)
      : null,
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
