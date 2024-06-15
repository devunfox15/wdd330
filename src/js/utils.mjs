//wrapper for querySelector
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
      event.preventDefault();
      callback();
  });
  qs(selector).addEventListener("click", callback);
}

// Get parameter from URL
export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
}

export function renderListWithTemplate(templateFn, parentElement, list, position = "afterbegin", clear = true) {
  if (clear) {
    parentElement.innerHTML = "";
  }
  const htmlStrings =  list.map(templateFn);
  parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
}

export async function renderWithTemplate(
  templateFn,
  parentElement,
  data,
  callback,
  position = "afterbegin",
  clear = true
) {
  if (clear) {
    parentElement.innerHTML = "";
  }
  const htmlString = await templateFn(data);
  parentElement.insertAdjacentHTML(position, htmlString);
  if (callback){
    callback(data);
  }
}

export function loadTemplate(path) {
  return async function () {
    const response = await fetch(path);
    if (response.ok) {
    const html = await response.text();
    return html;
    }
  };
}
export async function loadHeaderFooter(headerpath, footerpath) {
  const headerTemplateFn = loadTemplate(headerpath);
  const footerTempleteFn = loadTemplate(footerpath);


  const header = document.querySelector("header");
  const footer = document.querySelector("footer");

  renderWithTemplate(headerTemplateFn, header);
  renderWithTemplate(footerTempleteFn, footer);
}


export async function convertToJson(res) {
  const  response = await res.json();
  if (res.ok) {
    return response;
  } else {
    throw {name:"servicesError", message: response};
  }
}

// using instructor solution atm
export function alertMessage(message, scroll = true) {
  const alert = document.createElement("div");
  alert.classList.add("alert");
  alert.innerHTML = `<p>${message}</p><span>X</span>`;

  alert.addEventListener("click", function (e) {
    if (e.target.tagName == "SPAN") {
      main.removeChild(this);
    }
  });
  const main = document.querySelector("main");
  main.prepend(alert);
  // make sure they see the alert by scrolling to the top of the window
  //we may not always want to do this...so default to scroll=true, but allow it to be passed in and overridden.
  if (scroll) window.scrollTo(0, 0);


}

export function removeAllAlerts() {
  const alerts = document.querySelectorAll(".alert");
  alerts.forEach((alert) => document.querySelector("main").removeChild(alert));
}