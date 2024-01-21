export const formatNumber = (count: number) => {
  if (count > 10 && count < 99) {
    return `${count.toString().slice(0, 1)}0+`;
  } else if (count > 99 && count < 999) {
    return `${count.toString().slice(0, 2)}0+`;
  } else if (count > 999 && count < 10000) {
    return `${count.toString().slice(0, 1)}K+`;
  } else if (count > 9999 && count < 100000) {
    return `${count.toString().slice(0, 2)}K+`;
  } else if (count > 99999 && count < 1000000) {
    return `${count.toString().slice(0, 3)}K+`;
  } else return count;
};

export const arrayMatrix = (list: any[], count: number) => {
  const itemsCount = list.length;
  const items = [];
  const itemsPerRow = count;

  for (let step = 0; step < itemsCount; step += itemsPerRow) {
    const rowItems = list.slice(step, step + itemsPerRow);
    items.push(rowItems);
  }
  return items;
};

