const download = (data, filename) => {
  let file = new Blob([data], { type: "text/plain" });
  if (window.navigator.msSaveOrOpenBlob)
    window.navigator.msSaveOrOpenBlob(file, filename);
  else {
    let link = document.createElement("a"),
      url = URL.createObjectURL(file);
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    setTimeout(function () {
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    }, 0);
  }
};

btnDownload.onclick = () => {
  download(historyArr.join("\n"), "history");
};
