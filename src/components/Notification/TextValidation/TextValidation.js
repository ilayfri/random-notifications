const textCheck = (text) => {
  let finalText = text;
  if (text.includes("sale")) {
    finalText = finalText + "!";
  }
  if (text.includes("new")) {
    finalText = "~~" + finalText;
  }

  finalText = finalText.replace("limited", "LIMITED");
  finalText = finalText.replace("edition", "EDITION");

  return finalText;
};

export default textCheck;
