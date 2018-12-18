import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  //calculate the starting index of the items on this page
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
  // _.slice(items, startIndex);
  //_.take()
}
