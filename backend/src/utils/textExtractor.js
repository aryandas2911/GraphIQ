import pdf from "pdf-parse";
import mammoth from "mammoth";

export const extractRawText = async (fileBuffer, fileType) => {
  let parsedText = "";
  if (fileType == "application/pdf") {
    parsedText = (await pdf(fileBuffer)).text;
  } else {
    parsedText = (await mammoth.extractRawText({ buffer: fileBuffer })).value;
  }

  let cleanText = parsedText;
  cleanText = cleanText.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g, "");

  cleanText = cleanText
    .replace(/\r\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]+/g, " ")
    .trim();

  return cleanText;
};
