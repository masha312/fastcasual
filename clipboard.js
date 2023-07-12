let text = document.getElementById("email").innerHTML;
const copyContent = async () => {
  try {
    await navigator.clipboard.writeText(text);

    document.getElementById(
      "copy-button"
    ).innerHTML = `<img src="./check.svg" alt="">`;
    setTimeout(function () {
      document.getElementById(
        "copy-button"
      ).innerHTML = `<img src="./copy.svg" alt="">`;
    }, 1200);

    console.log("Content copied to clipboard");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};
