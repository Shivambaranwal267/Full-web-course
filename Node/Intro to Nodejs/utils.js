function multiply(a, b) {
  return a * b;
}

function add(a, b) {
  return a + b;
}

const log = {
  warning: (info) => {
    console.log("warning", info);
  },

  error: (info) => {
    console.log("error ,", info);
  },
};

exports.my = () => {
  console.log("hurrah");
};

module.exports = { multiply, add, log };
