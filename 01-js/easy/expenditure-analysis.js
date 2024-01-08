/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {};

  
    // Iterate through each transaction
    transactions.forEach((transaction) => {
        const { category, price } = transaction;

        // Check if the category is already in the result
        if (categoryTotals[category]) {
            // If yes, add the price to the existing total
            categoryTotals[category].totalSpent += price;
        } else {
            // If no, create a new entry for the category
            categoryTotals[category] = {
                category: category,
                totalSpent: price
            };
        }
    });

    // Convert the result object into an array of values
    const result = Object.values(categoryTotals);

    return result;
}

module.exports = calculateTotalSpentByCategory;
