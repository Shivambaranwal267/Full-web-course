
// if no error try always will be executed
// in try if error first will be executed then its break and directly go to catch
try {
  // greet()
  console.log("here is no error");
  console.log(x);
} catch (err) {
  // if any error catch will be executed
  console.log(err);
  console.log("the error occured");
} finally {
  // finally always executed
  console.log("This is always will be executed");
}
