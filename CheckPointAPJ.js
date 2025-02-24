// Task 01
async function iterateWithAsyncAwait(values) {
  for (const value of values) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(value);
  }
}

// Task 02
async function awaitCall() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
}

// Task 03
async function awaitCallWithErrorHandling() {
  try {
    const response = await fetch("https://invalid-url.com"); // Invalid URL to trigger error
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data. Please try again later.", error);
  }
}

// Task 04
async function asyncFunction1() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Function 1 executed");
}

async function asyncFunction2() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Function 2 executed");
}

async function asyncFunction3() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Function 3 executed");
}

async function chainedAsyncFunctions() {
  await asyncFunction1();
  await asyncFunction2();
  await asyncFunction3();
}
