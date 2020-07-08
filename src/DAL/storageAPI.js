const storageAPI = {
  getSavedArticles(filter) {
    let resultArticlePack = this._store();

    if (filter.tags.length !== 0) {
      resultArticlePack = resultArticlePack.filter((a) => {
        if (!a.tags) return false;

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

        return false;
      });
    }

    if (filter.isUnreadList) {
      resultArticlePack = resultArticlePack.filter((a) => {
        if (!a.isRead) return true;

        return false;
      });
    }

    if (filter.isFirstList) {
      resultArticlePack = resultArticlePack.filter((a) => {
        if (a.isFirstList) return true;

        return false;
      });
    }

    return resultArticlePack;
  },
  switchFirstListArticleStatus(id, filter) {
    let articlesPack = this._store(),
      firstListItemsAmount = this.getFirstListItemsAmount(),
      articleIndex = this._getArticleIndex(id);

    if (articlesPack[articleIndex].isFirstList) {
      articlesPack[articleIndex].isFirstList = !articlesPack[articleIndex]
        .isFirstList;
    } else {
      if (firstListItemsAmount < 6) {
        articlesPack[articleIndex].isFirstList = true;
      }
    }

    this._saveStore(articlesPack);

    return this.getSavedArticles(filter);
  },
  switchHaveReadListArticleStatus(id, filter) {
    let articlesPack = this._store(),
      articleIndex = this._getArticleIndex(id);

    if (!articlesPack[articleIndex].isRead) {
      articlesPack[articleIndex].isRead = true;
    } else {
      articlesPack[articleIndex].isRead = !articlesPack[articleIndex].isRead;
    }

    this._saveStore(articlesPack);

    return this.getSavedArticles(filter);
  },
  getSavedTags() {
    if (!this._tags()) {
      let state = {
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

      this._saveTags(state);
    }

    return this._tags();
  },
  saveArticle(articleData) {
    if (articleData.tags) {
      let newTags = this._createNewTags(articleData.tags, this._tags());

      this._saveTags(newTags);
    }

    let tempArticlesState = this._store();

    let articleDataWithTagsId = {
      link: articleData.link,
      title: articleData.title,
      desc: articleData.desc,
      cover: articleData.cover,
      isFirstList: articleData.isFirstList,
      tags: articleData.tags
        ? this._getTagsId(this._tags().tags, articleData.tags)
        : null,
    };

    let id = Math.round(Math.random() * 1000000);

    tempArticlesState.push({
      id: id,
      ...articleDataWithTagsId,
    });
    this._saveStore(tempArticlesState);
    return this._store();
  },
  deleteArticle(articleId) {
    this._deleteTagsOfArticle(articleId);
    let newState = this._store().filter((i) => i.id !== articleId);
    this._saveStore(newState);
    return this._store();
  },
  updateArticleData(id, data) {
    let i = this._getArticleIndex(id),
      articlesPack = this._store();

    if (data.tags) {
      this._deleteTagsOfArticle(id);

      let newTags = this._createNewTags(articlesPack.tags, this._tags());

      this._saveTags(newTags);
    }

    articlesPack[i].link = data.link;
    articlesPack[i].cover = data.cover;
    articlesPack[i].title = data.title;
    articlesPack[i].desc = data.desc;
    articlesPack[i].tags = data.tags
      ? this._getTagsId(this._tags().tags, data.tags)
      : null;
    articlesPack[i].isFirstList = data.isFirstList;
    articlesPack[i].isRead = data.isRead;

    this._saveStore(articlesPack);

    return this._store();
  },
  getFirstListItemsAmount() {
    return this._firstList().length;
  },
  getArticleData(id) {
    let i = this._getArticleIndex(id),
      articlesPack = this._store();

    return articlesPack[i];
  },
  getTagNameByID(id) {
    let result = [];
    for (let t of this._tags().tags) {
      if (t.id === id) {
        result.push(t.value);
      }
    }
    return result;
  },
  saveTestStore(articles, tags) {
    this._saveStore(articles);

    let tagsStorage = {
      tags: [...tags],
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

    this._saveTags(tagsStorage);
    return this._store();
  },
  _store() {
    let store = JSON.parse(localStorage.getItem("articlesPack"));

    if (!store) {
      store = [];
      this._saveStore(store);
    }
    return store;
  },
  _tags() {
    let tags = JSON.parse(localStorage.getItem("tags"));

    if (!tags) {
      tags = {
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
      this._saveTags(tags);
    }

    return tags;
  },
  _createNewTags(tagsStr, tagsState) {
    if (!tagsStr) return tagsState;

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
  },
  _getTagsId(tags, tagsStr) {
    let result = [],
      tagArray = formateTags(tagsStr);

    // tagArray.map((t) => {
    //   for (let i = 0; i < tags.length; i++) {
    //     if (t === tags[i].value) {
    //       result.push(tags[i].id);
    //     }
    //   }
    // });

    for (let t of tagArray) {
      for (let i = 0; i < tags.length; i++) {
        if (t === tags[i].value) {
          result.push(tags[i].id);
        }
      }
    }

    return result;

    function formateTags(str) {
      return str.split(",").map((t) => t.trim());
    }
  },
  _firstList() {
    return this._store().filter((a) => a.isFirstList);
  },
  _getArticleIndex(id) {
    let articles = this._store();
    for (let i = 0; i < articles.length; i++) {
      if (articles[i].id === id) return i;
    }
  },
  _saveStore(articlesPack) {
    localStorage.setItem("articlesPack", JSON.stringify(articlesPack));
  },
  _saveTags(tags) {
    localStorage.setItem("tags", JSON.stringify(tags));
  },
  _deleteTagsOfArticle(id) {
    let articlesPack = this._store(),
      tags = articlesPack[this._getArticleIndex(id)].tags,
      resultTagList = this._tags().tags,
      tagsStorage = this._tags();

    tags = tags.filter((t) => {
      for (let a of articlesPack) {
        if (a.tags) {
          if (a.tags.includes(t) && a.id !== id) {
            return false;
          }
        }
      }
      return true;
    });

    resultTagList = resultTagList.filter((t) => {
      for (let deletedTag of tags) {
        if (deletedTag === t.id) {
          return false;
        }
      }
      return true;
    });

    this._saveTags({ ...tagsStorage, tags: resultTagList });
  },
};

export const getSavedArticlesAPI = (filter) => {
  return storageAPI.getSavedArticles(filter);
};

export function switchFirstListArticleStatusAPI(id, filter) {
  return storageAPI.switchFirstListArticleStatus(id, filter);
}

export function switchHaveReadListArticleStatusAPI(id, filter) {
  return storageAPI.switchHaveReadListArticleStatus(id, filter);
}

export function getSavedTagsAPI() {
  return storageAPI.getSavedTags();
}

export function saveArticleAPI(articleData) {
  return storageAPI.saveArticle(articleData);
}

export function deleteArticleAPI(articleId) {
  return storageAPI.deleteArticle(articleId);
}

export function getFirstListItemsAmountAPI() {
  return storageAPI.getFirstListItemsAmount();
}

export function getArticleDataAPI(id) {
  return storageAPI.getArticleData(id);
}

export function getTagNameByIdAPI(id) {
  return storageAPI.getTagNameByID(id);
}

export function updateArticleDataAPI(id, data) {
  return storageAPI.updateArticleData(id, data);
}

export function saveTestStoreAPI(articles, tags) {
  return storageAPI.saveTestStore(articles, tags);
}
