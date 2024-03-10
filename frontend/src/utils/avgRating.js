const calculateAvgRating = reviews => {
    if (!reviews || reviews.length === 0) {
        return {
            totalRating: 0,
            avgRating: ""
        };
    }

    const totalRating = reviews.reduce((acc, item) => acc + item.rating, 0);
    let avgRating;

    if (totalRating === 0) {
        avgRating = "";
    } else if (totalRating === 1) {
        avgRating = totalRating;
    } else {
        avgRating = (totalRating / reviews.length).toFixed(1);
    }

    return {
        totalRating,
        avgRating
    };
};

export default calculateAvgRating;