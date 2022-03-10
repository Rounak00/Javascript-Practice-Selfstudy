/*What is delegation event?
Event delegation refers to the process of using event propagation (bubbling) to handle events at a higher level in the DOM than the element on which the event originated. */

//Benefits:
//It saves a lot of memory and we need to write less code
// Dom manipulation

//Limits:
// all events are not buuble up like blur, focus, resize not bubble up
// if we use stop propogation then its not work

//Example 1:
<!DOCTYPE html>
<head>
  <title>Akshay Saini</title>
</head>
<body>

  <div>
    <ul id="category">
      <li id="laptops">laptops</li>
      <li id="cameras">cameras</li>
      <li id="shoes">shoes</li>
    </ul>
  </div>

  <script >
    document.querySelector("#category").addEventListener('click', (e) => {
  console.log(e.target);
  if (e.target.tagName == 'LI') {
    window.location.href = "/" + e.target.id;
  }
});
  </script>
</body>
</html>

//Example 2:

<!DOCTYPE html>
<head>
  <title>Akshay Saini</title>
</head>
<body>

  <div id="form">
    <input type="text" id="name" data-uppercase>
    <input type="text" id="pan">
    <input type="text" id="mobile" data-uppercase>
  </div>

  <script >
  document.querySelector("#form").addEventListener('keyup', (e) => {
  console.log(e);
  if (e.target.dataset.uppercase != undefined) {
    e.target.value = e.target.value.toUpperCase();
  }
})
  </script>
</body>
</html>