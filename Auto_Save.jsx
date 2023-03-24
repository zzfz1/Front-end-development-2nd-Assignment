var docName = app.activeDocument.name;
var savePath = app.activeDocument.path + "/" + docName;

function saveAiFile() {
  var saveOpts = new IllustratorSaveOptions();
  saveOpts.embedLinkedFiles = true;
  saveOpts.fontSubsetThreshold = 0.0;
  saveOpts.pdfCompatible = true;
  app.activeDocument.saveAs(new File(savePath), saveOpts);
}

function init() {
  if (app.documents.length > 0) {
    saveAiFile();
  }
}

init();
