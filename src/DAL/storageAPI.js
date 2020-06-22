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
  },
  switchFirstListArticleStatus(id, filter) {
    let articlesPack = this._store(),
      firstListItemsAmount = this._firstList.length,
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
      let newTags = createNewTags(articleData.tags, this._tags());

      this._saveTags(newTags);
    }

    let tempArticlesState = this._store();

    let articleDataWithTagsId = {
      link: articleData.link,
      title: articleData.title,
      desc: articleData.desc,
      cover: articleData.cover,
      tags: articleData.tags
        ? getTagsId(this._tags().tags, articleData.tags)
        : null,
    };

    let id = Math.round(Math.random() * 1000000);

    tempArticlesState.push({
      id: id,
      ...articleDataWithTagsId,
    });
    this._saveStore(tempArticlesState);

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
  },
  deleteArticle(articleId) {
    let newState = this._store().filter((i) => i.id !== articleId);
    this._saveStore(newState);
    return this._store();
  },
  getFirstListItemsAmount() {
    return this._firstList.length;
  },
  _store: () => JSON.parse(localStorage.getItem("articlesPack")),
  _tags: () => JSON.parse(localStorage.getItem("tags")),
  _firstList: () => this._store().filter((a) => a.isFirstList),
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
  return storageAPI;
}
