import { getSavedArticlesAPI } from "./storageAPI";

const TAG_FILTER = "TAG_FILTER";
export function filterWithTags(tags) {
  // tags = [{id: ...}, {id: ...}, {id: ...}, ...]

  return {
    type: TAG_FILTER,
    tags,
  };
}

export function getSavedArticlesWithFilter(filter) {
  switch (filter.type) {
    case TAG_FILTER:
      return getSavedArticlesAPI().filter((a) => {
        a.tags.map((t) => {
          filter.tags.map((f) => {
            if (t === f.id) return true;
          });
        });

        return false;
      });
    default:
      getSavedArticlesAPI();
  }
}
