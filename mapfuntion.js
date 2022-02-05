arrayOne = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];

arrayOne.map((i) => {
  if (i % 4 == 0 || i % 7 == 0) {
    console.log("The following numbers are divisible with 4 and 7");
    console.log(i)
  }
});
