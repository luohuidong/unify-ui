const ejs = require("ejs");
const fs = require("fs");
const path = require("path");

const iconFolderPath = path.resolve(__dirname, "../../src/icons/");

// read all icon files
const iconFileNames = fs.readdirSync(path.resolve(iconFolderPath, "./assets/"));
const iconInfos = iconFileNames.map((iconFileName) => {
  iconName = iconFileName.split(".")[0];

  return {
    iconFileName,
    iconName,
  };
});

// generate index file
const indexFileContent = ejs.render(
  fs.readFileSync(path.join(__dirname, "./index.template"), {
    encoding: "utf-8",
  }),
  { iconInfos }
);
fs.writeFileSync(path.join(iconFolderPath, "./index.ts"), indexFileContent);

// generate all icons show case
const allIconsShowCaseFileContent = ejs.render(
  fs.readFileSync(path.join(__dirname, "./all-icons.template"), {
    encoding: "utf-8",
  }),
  { iconInfos }
);
fs.writeFileSync(path.join(iconFolderPath, "./story/AllIcons.vue"), allIconsShowCaseFileContent);
