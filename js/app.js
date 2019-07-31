const shortURLmessage = document.querySelector("#shortenedUrl");

const onSubmit = () => {
  event.preventDefault();
  shortURLmessage.innerText = "Shortening URL...";

  const url = { original: event.target.url.value };

  if (url.original === "") {
    shortURLmessage.innerText = "You must insert a URL.";
  } else {
    const createUrl = "http://localhost:3000/urls";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(url)
    };

    fetch(createUrl, options)
      .then(resp => resp.json())
      .then(resp => {
        if (resp.error) {
          shortURLmessage.innerText = resp.error;
        } else {
          showShortenedUrl(resp);
        }
      });

    event.target.reset();
  }
};

const showShortenedUrl = url => {
  shortURLmessage.innerText = `Here is your shortened URL: http://localhost:3000/${
    url.shortened
  }`;
};
