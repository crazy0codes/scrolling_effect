// URL of the JSON file on the server
const jsonFileUrl = './count.json';

// Function to increment the count value in the JSON file
function incrementCount() {
  fetch(jsonFileUrl)
    .then(response => response.json())
    .then(data => {
      // Increment the count value
      data.count += 1;

      // Send a PUT request to update the JSON file on the server
      fetch(jsonFileUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(() => console.log('Count updated successfully'))
      .catch(error => console.error('Error updating count:', error));
    })
    .catch(error => console.error('Error retrieving JSON file:', error));
}

// Call the incrementCount function when the website is opened
incrementCount();