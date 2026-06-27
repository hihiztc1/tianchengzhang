const publications = [
  {
    venue: "TNSM'25",
    title:
      "Delay-Aware and Energy-Efficient Integrated Optimization System for 5G Networks",
    type: "journal",
    area: ["Cloud-Edge Systems"],
    quality: ["jcr-1"],
    year: "2025",
    authors:
      "Jingchao Tan, Tiancheng Zhang, Cheng Zhang, Chenyang Wang, Chao Qiu, Xiaofei Wang, Mohsen Guizani",
    abstract:
      "IEEE Transactions on Network and Service Management. IF: 5.4, JCR-1.",
    links: [],
  },
  {
    venue: "JCC'25",
    title:
      "Energy-Efficient User Allocation and Cache Updating in Mobile Edge Computing Networks Based on User Geographical Aggregation",
    type: "journal",
    area: ["Cloud-Edge Systems"],
    quality: ["jcr-2"],
    year: "2025",
    authors:
      "Jingchao Tan, Tiancheng Zhang, Cheng Zhang, Chenyang Wang, Xiuhua Li, Xiaofei Wang",
    abstract:
      "Journal of Cloud Computing. IF: 4.3, JCR-2.",
  },
  {
    venue: "IEEE Netw.'23",
    title:
      "SemanticICV: Endogenous Secure Full-Scenario Learning for Intelligent Connected Vehicles Driven by Semantics",
    type: "journal",
    area: ["Cloud-Edge Systems", "Semantics"],
    quality: ["highlight", "jcr-1"],
    year: "2023",
    authors:
      "Cheng Zhang, Tiancheng Zhang, Yunfeng Zhao, Chao Qiu*, Xiaofei Wang, Shizhan Lan, Jingxu Cao",
    abstract: "IEEE Network Magazine. IF: 8.8, JCR-1. First Author by student contribution (advisor listed first).",
  },
  {
    venue: "ICML'26",
    title:
      "MAPS: Memory-Aware Predictive Scheduling Framework for Large Language Models Serving",
    type: "conference",
    area: ["LLM Serving"],
    quality: ["highlight", "ccf-a"],
    year: "2026",
    authors:
      "Tiancheng Zhang, Yulin Chen, Yunfeng Zhao, Shaoyuan Huang, Cheng Zhang, Xiaofei Wang",
    abstract: "International Conference on Machine Learning. CCF-A.",
  },
  {
    venue: "KDD'25",
    title:
      "MetaEformer: Unveiling and Leveraging Meta-patterns for Complex and Dynamic Systems Load Forecasting",
    type: "conference",
    area: ["Workload Forecasting"],
    quality: ["highlight", "ccf-a"],
    year: "2025",
    authors:
      "Shaoyuan Huang*, Tiancheng Zhang*, Zhongtian Zhang, Xiaofei Wang, Lanjun Wang, Xin Wang",
    abstract: "ACM SIGKDD Conference on Knowledge Discovery and Data Mining, CCF-A. Equal Contribution.",
    links: [],
  },
  {
    venue: "AAAI'24",
    title: "EasyTS: The Express Lane to Long Time Series Forecasting",
    type: "conference",
    area: ["Workload Forecasting"],
    quality: ["highlight", "ccf-a"],
    year: "2024",
    authors: "Tiancheng Zhang, Shaoyuan Huang, Cheng Zhang, Xiaofei Wang, Wenyu Wang",
    abstract: "AAAI Conference on Artificial Intelligence. CCF-A.",
    links: [],
  },
  {
    venue: "ECAI'25",
    title:
      "HRS: Hybrid Representation Framework with Scheduling Awareness for Time Series Forecasting in Crowdsourced Cloud-Edge Platforms",
    type: "conference",
    area: ["Workload Forecasting"],
    quality: ["highlight", "ccf-b"],
    year: "2025",
    authors:
      "Tiancheng Zhang, Cheng Zhang, Shuren Liu, Xiaofei Wang, Shaoyuan Huang, Wenyu Wang",
    abstract: "European Conference on Artificial Intelligence. CCF-B.",
    links: [],
  },
  {
    venue: "ICC'26",
    title:
      "PACE: Predictive and Adaptive Multimodal Cache Enhancement for Cross-Modal Task Chains",
    type: "conference",
    area: ["LLM Serving"],
    quality: ["ccf-c"],
    year: "2026",
    authors: "Zhongtian Zhang, Tiancheng Zhang, Jingchao Tan, Cheng Zhang, Xiaofei Wang",
    abstract: "IEEE International Conference on Communications. CCF-C.",
    links: [],
  },
  {
    venue: "ICC'26",
    title:
      "N2V: A Lightweight Image-Based Model for Predicting Extreme Regions in Network Traffic",
    type: "conference",
    area: ["Workload Forecasting"],
    quality: ["ccf-c"],
    year: "2026",
    authors:
      "Shuren Liu, Tiancheng Zhang, Shaoyuan Huang, Nan Xue, Yedong Ning, Cheng Zhang, Xiaofei Wang",
    abstract:
      "IEEE International Conference on Communications. CCF-C.",
    links: [],
  },
  {
    venue: "ICC'24",
    title:
      "Energy-Efficient User Allocation and Content Updating in Mobile Edge Computing Networks",
    type: "conference",
    area: ["Cloud-Edge Systems"],
    quality: ["ccf-c"],
    year: "2024",
    authors:
      "Jingchao Tan, Tiancheng Zhang, Chenyang Wang, Xiuhua Li, Xiaofei Wang",
    abstract: "IEEE International Conference on Communications. CCF-C.",
  },
  {
    venue: "NPC'24",
    title:
      "AnaNET: Anatomical Network for Aggregated Time Series Forecasting in Multi-layered Architecture",
    type: "conference",
    area: ["Workload Forecasting"],
    quality: ["highlight","ccf-c"],
    year: "2025",
    authors: "Tiancheng Zhang, Cheng Zhang, Shuren Liu, Xiaofei Wang, Shaoyuan Huang",
    abstract: "IFIP International Conference on Network and Parallel Computing. CCF-C. ",
  },
  {
    venue: "Comput. J.'25",
    title: "Unravelling the Semantic Mysteries of Transformers Layer by Layer",
    type: "journal",
    area: ["Semantics"],
    quality: ["jcr-3"],
    year: "2025",
    authors:
      "Cheng Zhang, Jinxin Lv, Jingxu Cao, Jiachuan Sheng, Dawei Song, Tiancheng Zhang",
    abstract: "The Computer Journal. IF: 1.5, JCR-3.",
    links: [],
  },
];

const state = {
  type: "all",
  area: "all",
  mark: "all",
  query: "",
};

const publicationList = document.querySelector("#publicationList");
const publicationCount = document.querySelector("#publicationCount");
const searchInput = document.querySelector("#publicationSearch");

function matchesPublication(publication) {
  const text = [
    publication.venue,
    publication.title,
    publication.year,
    publication.authors,
    publication.abstract,
    publication.quality.join(" "),
    publication.area.join(" "),
  ]
    .join(" ")
    .toLowerCase();

  const matchesQuery = text.includes(state.query);
  const matchesType = state.type === "all" || publication.type === state.type;
  const matchesArea =
    state.area === "all" || publication.area.includes(state.area);
  const matchesMark =
    state.mark === "all" || publication.quality.includes(state.mark);

  return matchesQuery && matchesType && matchesArea && matchesMark;
}

function renderPublications() {
  const visiblePublications = publications
    .filter(matchesPublication)
    .sort(comparePublications);

  publicationCount.textContent = `${visiblePublications.length} / ${publications.length} publications`;
  publicationList.innerHTML = visiblePublications
    .map(
      (publication) => `
        <article class="publication-card">
          <div class="publication-header">
            <div class="publication-title">
              <span class="venue">[${publication.venue}]</span>
              <h3>${publication.title}</h3>
            </div>
            <div class="rank-tags">
              ${publication.quality
                .map(
                  (quality) =>
                    `<span class="tag quality ${getQualityClass(quality)}">${formatLabel(quality)}</span>`
                )
                .join("")}
            </div>
          </div>
          <p class="authors">${formatAuthors(publication.authors)}</p>
          <p class="abstract">${publication.abstract}</p>
          <div class="publication-categories">
            <span class="tag">${formatLabel(publication.type)}</span>
            ${publication.area
              .map((area) => `<span class="tag">${formatLabel(area)}</span>`)
              .join("")}
          </div>
          ${
            publication.links?.length
              ? `<div class="tags">
                  ${publication.links
                    .map((link) => `<a class="tag" href="${link.url}">${link.label}</a>`)
                    .join("")}
                </div>`
              : ""
          }
        </article>
      `
    )
    .join("");
}

function comparePublications(a, b) {
  const yearDelta = Number(b.year) - Number(a.year);
  if (yearDelta !== 0) return yearDelta;

  return getVenueRank(a.venue) - getVenueRank(b.venue);
}

function getVenueRank(venue) {
  const name = venue.toLowerCase();
  if (name.includes("icml")) return 1;
  if (name.includes("kdd")) return 2;
  if (name.includes("aaai")) return 3;
  if (name.includes("ecai")) return 4;
  if (name.includes("tnsm")) return 5;
  if (name.includes("jcc")) return 6;
  if (name.includes("ieee network")) return 7;
  if (name.includes("icc")) return 8;
  if (name.includes("npc")) return 9;
  return 99;
}

function getQualityClass(value) {
  if (value === "ccf-b") return "quality-blue";
  if (value === "ccf-c") return "quality-green";
  if (value === "jcr-2") return "quality-blue";
  if (value === "jcr-3") return "quality-green";
  return "";
}

function formatAuthors(authors) {
  return authors.replaceAll(
    "Tiancheng Zhang",
    '<strong class="author-me">Tiancheng Zhang</strong>'
  );
}

function formatLabel(value) {
  const labels = {
    "LLM Serving": "LLM Serving",
    "Cloud-Edge Systems": "Cloud-Edge Systems",
    "Semantics": "Semantics",
    "Workload Forecasting": "Workload Forecasting",
    "ai-systems": "AI Systems",
    "book-chapter": "Book Chapter",
    "cas-1": "CAS Q1",
    "cas-2": "CAS Q2",
    "cas-3": "CAS Q3",
    "ccf-a": "CCF-A",
    "ccf-b": "CCF-B",
    "ccf-c": "CCF-C",
    "cloud-edge": "Cloud Edge",
    "jcr-1": "JCR Q1",
    "jcr-2": "JCR Q2",
    "jcr-3": "JCR Q3",
  };

  if (labels[value]) return labels[value];

  return value
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

document.querySelectorAll(".filter-row").forEach((row) => {
  row.addEventListener("click", (event) => {
    const button = event.target.closest(".filter-button");
    if (!button) return;

    const group = row.dataset.filterGroup;
    state[group] = button.dataset.filter;

    row.querySelectorAll(".filter-button").forEach((item) => {
      item.classList.toggle("active", item === button);
    });

    renderPublications();
  });
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value.trim().toLowerCase();
  renderPublications();
});

const themeToggle = document.querySelector(".theme-toggle");

function syncThemeToggle() {
  const isDark = document.documentElement.dataset.theme === "dark";
  themeToggle.innerHTML = `<span aria-hidden="true">${isDark ? "☀" : "☾"}</span>`;
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Switch to light mode" : "Switch to dark mode"
  );
}

function saveTheme(value) {
  try {
    localStorage.setItem("theme", value);
  } catch {
    // Theme still switches even when storage is unavailable.
  }
}

themeToggle.addEventListener("click", () => {
  const isDark = document.documentElement.dataset.theme === "dark";
  if (isDark) {
    delete document.documentElement.dataset.theme;
    saveTheme("light");
  } else {
    document.documentElement.dataset.theme = "dark";
    saveTheme("dark");
  }
  syncThemeToggle();
});

document.querySelector("#year").textContent = new Date().getFullYear();
syncThemeToggle();
renderPublications();
