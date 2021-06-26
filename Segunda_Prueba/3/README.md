This test consists of writing an asynchronous flow control code.

We have five ads that we want to get from a server and show as soon as possible, keeping their order.

** Expected behavior: **

- Make the request for the 5 ads without waiting for the previous one to finish (in parallel).
- Show the ads in order: 1, 2, 3, 4, 5.
- Show each ad as they are obtained, but respecting the order (Do not wait for all of them to finish to show them).
- When the 5 announcements are already there, show "Done!".
- If any of the requests fails, the program should show "Failed to load the xxx ad" and finish without showing the following ads.

** Examples of what the program should display on the console: **

_Faultlessly:_
`'' The first ad The second ad The third ad The forth ad The last ad Donate!` ''

- A request fails (for example the third ad): \*
  `'' The first ad The second ad Failed to load the third ad` ''

It is not necessary any type of web or html implementation, showing the result by console is enough.

In the code fragment of our `test.js` file, the function _`fakeFetch ()`_ is provided that simulates the fetching of the ads at a random time. Also some requests will fail randomly.

In addition to the resolution of the exercise, the clarity and ease of understanding of the code as well as its reliability will be assessed.

** BONUS: ** If any of the requests fails, try up to 3 times before ending the program.
