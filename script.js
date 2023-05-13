const apiURI = `https://web-series-quotes-api.deta.dev/quote/`;
const bodyEl = document.querySelector('body');

// create element function
const createElement = (childElName) => {
  return document.createElement(childElName);
};

// Append child to parent element function
const appendChild = (parent, childEl) => {
  return parent.appendChild(childEl);
};

bodyEl.classList.add('bg-dark');

// create a main element
const mainEl = createElement("main");
const mailElClass = ["container", "p-4"];
mainEl.classList.add(...mailElClass);
appendChild(bodyEl, mainEl);

// create a section element
const sectionEl = createElement("section");
const sectionElClass = ["d-flex", "flex-column", "align-items-center", "gap-2", "border", "rounded-3", "p-3"];
sectionEl.classList.add(...sectionElClass);
appendChild(mainEl, sectionEl);

// create a figure element
const figureEl = createElement("figure");
const figureElClass = ["text-center", "p-3"];
figureEl.classList.add(...figureElClass);
appendChild(sectionEl, figureEl);

// create blockquote element
const blockQuoteEl = createElement("blockquote");
const blockQuoteElClass = ["blockquote"];
blockQuoteEl.classList.add(...blockQuoteElClass);
appendChild(figureEl, blockQuoteEl);

// create a paragraph element
const paragraphEl = createElement("p");
const paragraphElClass = ["text-light"];
paragraphEl.classList.add(...paragraphElClass);
appendChild(blockQuoteEl, paragraphEl);

// create a figcaption element
const figCaptionEl = createElement("figcaption");
const figCaptionElClass = [`blockquote-footer`, "text-light"];
figCaptionEl.classList.add(...figCaptionElClass);
appendChild(figureEl, figCaptionEl);

// create a cite element
const citeEl = createElement("cite");
const citeElClass = ["text-light"];
citeEl.classList.add(...citeElClass);
appendChild(figureEl, citeEl);

// create a button
const buttonEl = createElement("button");
const buttonElClass = ["btn", "btn-primary"];
buttonEl.classList.add(...buttonElClass);
buttonEl.innerHTML = "Click here for more";
buttonEl.setAttribute("onclick", "window.location.reload()");
appendChild(sectionEl, buttonEl);

// Get data and Display Data
const getData = async () => {
  const response = await fetch(apiURI);
  const data = await response.json();

  paragraphEl.innerHTML = data[0].quote;
  figCaptionEl.innerHTML = `Author : ${data[0].author}`;
  citeEl.innerHTML = `Series : ${data[0].series}`;
};
getData();

