const createSvg = () => {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const circle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

  svg.setAttribute("viewbox", "0 0 18 18");
  svg.setAttribute("width", "18px");
  svg.setAttribute("height", "18px");
  svg.setAttribute("fill", "none");

  circle.setAttribute("cx", "9");
  circle.setAttribute("cy", "9");
  circle.setAttribute("r", "9");
  circle.setAttribute("fill", "#747474");
  circle.setAttribute("class", "delete-icon-color");

  path.setAttribute(
    "d",
    "M5.75829 13C5.9763 13 6.16588 12.9147 6.30806 12.763L8.99052 10.0616L11.6919 12.763C11.8341 12.9052 12.0142 13 12.2322 13C12.6493 13 12.9905 12.6493 12.9905 12.2322C12.9905 12.0142 12.9147 11.8341 12.763 11.6919L10.0711 9L12.7725 6.2891C12.9336 6.12796 13 5.96682 13 5.75829C13 5.33175 12.6588 5 12.2417 5C12.0427 5 11.8815 5.06635 11.7204 5.22749L8.99052 7.93839L6.2891 5.23697C6.14692 5.08531 5.9763 5.01896 5.75829 5.01896C5.34123 5.01896 5 5.34123 5 5.76777C5 5.9763 5.08531 6.1564 5.22749 6.29858L7.91943 9L5.22749 11.7014C5.08531 11.8341 5 12.0237 5 12.2322C5 12.6493 5.34123 13 5.75829 13Z"
  );
  path.setAttribute("fill", "white");

  svg.appendChild(circle);
  svg.appendChild(path);

  return svg;
};
