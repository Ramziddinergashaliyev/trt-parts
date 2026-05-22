const toSearchParts = (value) => {
  if (value === null || value === undefined) return [];
  if (Array.isArray(value)) {
    return value.flatMap((item) => toSearchParts(item));
  }
  return [String(value).replace(/\s+/g, " ").trim()];
};

export const buildCatalogSearchText = (item) => {
  return [
    item?.trtNo,
    item?.ctrNo,
    item?.lemforderNo,
    item?.englishName,
    item?.contents,
    item?.russianName,
    item?.groupName,
    item?.startOfSales,
    item?.photo,
    item?.weightPerPcKg,
    ...toSearchParts(item?.oemNo),
    ...toSearchParts(item?.carName),
    ...toSearchParts(item?.model),
    ...toSearchParts(item?.years),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
};

export const filterCatalogItems = (items, searchQuery) => {
  const query = searchQuery.trim().toLowerCase();
  if (!query) return items;

  return items.filter((item) => buildCatalogSearchText(item).includes(query));
};
