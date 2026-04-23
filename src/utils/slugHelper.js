// export const toSlug = (name = "") =>
//     name.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

export const toSlug = (name = "", id = "") => {
    const slugName = name
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "");
    return id ? `${slugName}-${id}` : slugName;
};

export const getIdFromSlug = (slug = "") => {
    return slug.split("-").at(-1);
};