/**
 * Submit a review
 * @param {org.ecommerce.productreview.SubmitReview} tx - the transaction to be processed
 * @transaction
 */
 async function submitReview(tx) {

	// Check new status
	if (tx.validationStatus == "Off")
	{
		let reviewRegistry = await getAssetRegistry('org.ecommerce.productreview.Review');
		let review = tx.review;
		review.validationStatus = "Invalid";
		await reviewRegistry.update(review);
	}
	else
	{
		throw new Error('The review could not be submitted');
	}
}

/**
 * Validate a review
 * @param {org.ecommerce.productreview.ValidateReview} tx - the transaction to be processed
 * @transaction
 */
async function validateReview(tx) {

	// Check new status
	let reviewRegistry = await getAssetRegistry('org.ecommerce.productreview.Review');
	let review = tx.review;
	review.validationStatus = "Valid";
	await reviewRegistry.update(review);
}

/**
 * Submit a review
 * @param {org.ecommerce.productreview.UpdateReview} tx - the transaction to be processed
 * @transaction
 */
async function updateReview(tx) {

	// Check new status

	let reviewRegistry = await getAssetRegistry('org.ecommerce.productreview.Review');
	let review = tx.review;
    review.reviewText = tx.reviewText
    review.rating = tx.rating
	review.updateStatus = "Updated";
	await reviewRegistry.update(review);

}

/**
 * Flag a review
 * @param {org.ecommerce.productreview.FlagReview} tx - the transaction to be processed
 * @transaction
 */
async function flagReview(tx) {

	// Check new status
	let reviewRegistry = await getAssetRegistry('org.ecommerce.productreview.Review');
	let review = tx.review;
	review.flaggedStatus = "Flagged";
	await reviewRegistry.update(review);
}
