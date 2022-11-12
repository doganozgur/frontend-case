/**
 * @func sortAlphabetically
 * Sort the list alphabetically
 * @param {array} list List of tags
 * @returns {array} Alphabetically sorted list
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

/**
 * @func getTagnames Function that collects unique tag names from the product list and returns as array
 * @param {array} options List that contains product details
 * @param {string} title String to decide to run function if current options are "Tags"
 * @returns {array} An array of list containing tags of the products
 */
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

/**
 * @func getWindowSize
 * @returns Returns the current width of the window element
 */
export function getWindowSize() {
  const { innerWidth: width } = window;
  return { width };
}