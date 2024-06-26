import * as htmlparser2 from "htmlparser2";

export function getMarkdownImportContent(source: string) {
  let tmp = "";
  const parser = new htmlparser2.Parser({
    ontext(text) {
      tmp = text;
    },
  });
  parser.write(source);
  parser.end();

  return tmp;
}
