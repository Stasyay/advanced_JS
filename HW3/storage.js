

function getReviews(product) {
    const reviews = localStorage.getItem(product)
       if (!reviews) {
           return [];
    }
               return JSON.parse(reviews);
}


function delReview(product, review) {
    const reviews = getReviews(product);

    if(reviews.length === 1) {
        localStorage.removeItem(product);
        return;
    }

    reviews.splice(reviews.indexOf(review), 1);
    localStorage.setItem(product, JSON.stringify(reviews)); 
    return reviews.length   
}

export { getReviews, delReview };