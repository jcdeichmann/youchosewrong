const notionDocId = "0cf034c8bc6d4686bac4389c4b8f17b7"

fetch("https://potion-api.now.sh/html?id=" + notionDocId)
  .then(res => res.text())
  .then(text => {
    document.querySelector("main").innerHTML = text
  })
