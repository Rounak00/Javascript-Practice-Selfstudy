const courses = [
  {
    name: "Complete ReactJS course",
    price: "2.3",
  },
  {
    name: "Complete Angular course",
    price: "2.1",
  },
  {
    name: "Complete MERN course",
    price: "2.7",
  },
  {
    name: "Complete C++ course",
    price: "2.8",
  },
  {
    name: "Django Course",
    price: "7.4",
  },
];
function courseDetails(){

  const ul = document.querySelector(".list-group");
  ul.innerHTML="";//reset the value
  courses.forEach((course) => {

    const li = document.createElement("li");//create li element
    li.classList.add("list-group-item");//add the class of the li

    const name = document.createTextNode(course.name);
    li.appendChild(name);
    
    const span=document.createElement("span");//create a span element
    span.classList.add("float-right");//add the class float-right

    const price=document.createTextNode("$" + course.price);//include all prices
    span.appendChild(price);//push or add prices into span

    li.appendChild(span);//span is injected into li
    ul.appendChild(li);//li is injected into ul
  });
};
// courseDetails();

window.addEventListener("load",courseDetails());

const button=document.querySelector(".sort-btn");

button.addEventListener("click",()=>{
  courses.sort((a, b)=> a.price - b.price);
  courseDetails();
});