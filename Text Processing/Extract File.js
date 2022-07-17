function extractFile(str) {
  let extracted = str.split("\\");
  let fileName = extracted.pop().split(".");
  let extension = fileName.pop();

  fileName = fileName.join(".");
  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${extension}`);
}

extractFile("C:\\Internal\\training-internal\\Template.bak.pptx");
