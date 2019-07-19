export default {
  colours: {
    alpha: (col, a) => `${col}${Math.round(a * 255).toString(16)}`,
    blue: "#2980b9",
    border: "#eeeeee",
    grey: "#cccccc",
    yellow: "#f1c40f",
  },
  font: {
    family: "Zilla Slab",
    url: "https://fonts.googleapis.com/css?family=Zilla+Slab:400,600,700&display=block",
  },
  containerWidth: 900,
  spacing: 10,
}
