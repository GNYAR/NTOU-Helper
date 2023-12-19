const log = (msg) => {
  const now = new Date().toLocaleString();
  return console.log(`[NTOU-Helper][${now}] ${msg}`);
};

const _$ = (selector, frame) => $(selector, window.frames[frame].document);
