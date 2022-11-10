/**
 * @func sortAlphabetically
 * Sort the list alphabetically
 * @param {*} list
 * @returns Alphabetically sorted list
 */
export const sortAlphabetically = (list) => {
  return list.sort((a, b) => {
    if (a.name) {
      if (a?.name?.toLowerCase() < b?.name?.toLowerCase()) return -1;
      if (a?.name?.toLowerCase() > b?.name?.toLowerCase()) return 1;
      return 0;
    } else {
      if (a.toLowerCase() < b.toLowerCase()) return -1;
      if (a.toLowerCase() > b.toLowerCase()) return 1;
      return 0;
    }
  });
};

export const getTagNames = (options, title) => {
  const tags = [];
  title === "Tags" &&
    options?.map((option) => {
      return option.tags.map((tag) => {
        return tags.includes(tag)
          ? tags.filter((i) => i !== tag)
          : tags.push(tag);
      });
    });
  return tags;
};
