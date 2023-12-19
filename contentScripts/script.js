const SRC = {
  survey: "Application/CET/CET20/CET2010_.aspx?progcd=CET2010",
  drawing: "Application/TKE/TKE20/TKE2020_.aspx?progcd=STU1020",
};

const switchTo = (x) => $("#mainIFrame").attr("src", SRC[x]);

// survey
const survey = () => {
  log("survey");
  switchTo("survey").on("load", () => {
    const frame = "viewFrame";
    log("load main");
    const [x] = _$("#DataGrid td[onclick]", "mainFrame").not(".page-active");
    if (!x) return $("#mainIFrame").off("load");

    x.click();
    $("#viewIFrame")
      .attr("onload", `window.frames['${frame}'].confirm = () => true;`)
      .one("load", () => {
        log("load view");
        _$("input[type='radio']", frame)
          .filter((x) => x % 5 == 1)
          .click();
        _$("input[type='submit']", frame).click();
        $("#viewIFrame").removeAttr("onload");
      });
  });
  // need to manual close the alert
};

const mapping = {
  survey: survey,
};
chrome.runtime.onMessage.addListener(({ func, args }) => {
  mapping[func](args);
});
