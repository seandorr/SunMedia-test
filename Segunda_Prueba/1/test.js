const incrementOnDelay = (i) => {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
};

for (var i = 0; i < 5; i++) {
  incrementOnDelay(i);
}
