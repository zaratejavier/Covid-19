export const sortData = (data) => {
  const sortedData = [...data];

  sortedData.sort((a, b) => {
    console.log('a => ', a);
    console.log('b => ', b);

    if (a.cases > b.cases) {
      return -1;
    } else {
      return 1;
    }
  });
  return sortedData;
};
