const NETWORK_ERROR_PROBABILITY = 0.1;
const adIdsToFetch = [1, 2, 3, 4, 5];

function fakeFetch(ad, cb) {
  const fakeResponses = [
    { ad: 1, title: "The first ad" },
    { ad: 2, title: "The second ad" },
    { ad: 3, title: "The third ad" },
    { ad: 4, title: "The forth ad" },
    { ad: 5, title: "The last ad" },
  ];
  const randomDelay = (Math.round(Math.random() * 1e4) % 40) + 1000;

  setTimeout(() => {
    const networkError = Math.random() <= NETWORK_ERROR_PROBABILITY;
    const currentAd = fakeResponses.find((resp) => resp.ad === ad);

    if (networkError) {
      cb(`Network error ad: ${ad}`);
    } else {
      cb(null, currentAd);
    }
  }, randomDelay);
}

const fetchCallBack = (error, currentAd) => {
  if (error) {
    console.log(error);
  } else {
    console.log(currentAd);
  }

  // SIGUIENTE PASO: Inserte los errores y currentAds en un nuevo array y luego ordene el array por número de ad.
};

for (const id of adIdsToFetch) {
  fakeFetch(id, fetchCallBack);
}
