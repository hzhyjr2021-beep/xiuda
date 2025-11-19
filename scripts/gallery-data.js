const GALLERY = [
  {
    date: "2023 · 12",
    title: "卡丁车 · 冲刺热身",
    description: "速度和信任在赛道上拉满，记住彼此的笑和握拳。",
    keywords: "坚持 / 热血 / 团队",
    image: "2023年12月_卡丁车.jpg",
  },
  {
    date: "2024 · 04",
    title: "白云山 · 登高望远",
    description: "野餐橙子补给，山顶风景提醒：努力也要笑着体验。",
    keywords: "远方 / 轻松 / 信念",
    image: "2024年4月_白云山.jpg",
  },
  {
    date: "2025 · 06",
    title: "毕业 · 下一站考研",
    description: "学士服和胜利手势定格，未来篇章即将展开。",
    keywords: "仪式感 / 新起点",
    image: "2025年6月_毕业.jpg",
  },
];

const container = document.querySelector("[data-timeline]");

function renderTimeline() {
  container.innerHTML = "";
  GALLERY.forEach((item) => {
    const wrap = document.createElement("article");
    wrap.className = "timeline-item";
    wrap.innerHTML = `
      <div class="timeline-item__meta">${item.date}</div>
      <div class="timeline-item__card">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <p class="timeline-item__tags">${item.keywords}</p>
        <div class="timeline-item__actions">
          <a class="timeline-item__btn" href="${item.image}" target="_blank" rel="noopener">查看原图</a>
          <a class="timeline-item__btn timeline-item__btn--ghost" href="${item.image}" download>下载保存</a>
        </div>
      </div>
      <div class="timeline-item__media">
        <img src="${item.image}" alt="${item.title}" loading="lazy" />
      </div>
    `;
    container.appendChild(wrap);
  });
}

renderTimeline();

