const sort = (a, b) => {
  const first = a.name.toLowerCase();
  const second = b.name.toLowerCase();
  if (first > second) {
    return 1;
  }
  if (first < second) {
    return -1;
  }
  return 0;
};
export default sort;
