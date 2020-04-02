const paginate = (query, { page, pagesize }) => {
    const offset = page * pagesize;
    const limit = pagesize;

    return {
        query,
        offset,
        limit,
    };
};

module.exports = paginate;