$("#survey").click(async (e) => {
  e.preventDefault();

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const { id, url } = tab;
  if (url == "https://ais.ntou.edu.tw/MainFrame.aspx")
    chrome.tabs.sendMessage(id, { func: "survey" });
});
