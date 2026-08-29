/* =====================================================================
   data.js の内容を読み取ってページを組み立てます。
   通常はこのファイルを編集する必要はありません。
   ===================================================================== */
(function () {
  "use strict";

  var D = window.SITE_DATA || {};
  var P = D.profile || {};

  /* ナビゲーションと目次はこの一覧から生成されます */
  var SECTIONS = [
    { id: "education",  ja: "学歴",         en: "Education" },
    { id: "research",   ja: "研究テーマ",    en: "Research" },
    { id: "projects",   ja: "プロジェクト",  en: "Projects" },
    { id: "experience", ja: "職歴",         en: "Experience" },
    { id: "contact",    ja: "外部リンク",    en: "Links" }
  ];

  /* 業績種別の表示名と並び順 */
  var TYPE_ORDER = ["journal", "international", "domestic", "award", "grant", "misc"];
  var TYPE_LABEL = {
    journal: "論文",
    international: "国際会議",
    domestic: "国内会議・研究会",
    award: "受賞",
    grant: "競争的資金等の研究課題",
    misc: "その他"
  };

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function byId(id) { return document.getElementById(id); }

  /* ---------- 基本情報の差し込み ---------- */
  function fillBindings() {
    var map = {
      nameJa: P.nameJa,
      nameEn: P.nameEn,
      affiliation: P.affiliation,
      lead: P.lead,
      email: P.email,
      year: new Date().getFullYear()
    };
    Object.keys(map).forEach(function (key) {
      if (map[key] == null) return;
      document.querySelectorAll('[data-bind="' + key + '"]').forEach(function (el) {
        el.textContent = String(map[key]);
      });
    });
  }

  /* ---------- サイドバーのナビゲーション ---------- */
  function renderNav() {
    var nav = byId("railNav");
    if (!nav) return;
    nav.innerHTML = SECTIONS.map(function (s) {
      return '<a href="#' + s.id + '">' + s.ja + "</a>";
    }).join("");
  }

  /* ---------- 業績1件分 ---------- */
  function pubItem(p) {
    var lines = [p.authors, p.venue, p.program, p.role, p.number]
      .filter(Boolean).map(esc).join("<br>");
    var link = p.url
      ? '<a class="pub__link" href="' + esc(p.url) + '" target="_blank" rel="noopener">リンクを開く</a>'
      : "";
    return '<li class="pub">' +
      '<span class="pub__year">' + esc(p.period || p.year) + "</span>" +
      "<div>" +
        '<p class="pub__title">' + esc(p.title) + "</p>" +
        (lines ? '<p class="pub__meta">' + lines + "</p>" : "") +
        link +
      "</div></li>";
  }

  /* 新しい順に並べる。period が "2025 — 2026" の場合は先頭の数字を使う */
  function sortKey(p) {
    if (p.year) return Number(p.year) || 0;
    var m = String(p.period || "").match(/\d{4}/g);
    return m ? Number(m[m.length - 1]) : 0;
  }

  /* ---------- 研究テーマと業績 ---------- */
  function renderThemes() {
    var box = byId("themes");
    if (!box) return;
    var all = Array.isArray(D.publications) ? D.publications : [];

    box.innerHTML = (D.themes || []).map(function (t) {
      var mine = all.filter(function (p) {
        return Array.isArray(p.themes) && p.themes.indexOf(t.id) !== -1;
      });

      var body;
      if (mine.length === 0) {
        body = '<p class="empty">業績データは準備中です。' +
               "data.js の publications に追加すると、ここに表示されます。</p>";
      } else {
        body = TYPE_ORDER.map(function (type) {
          var group = mine
            .filter(function (p) { return p.type === type; })
            .sort(function (a, b) { return sortKey(b) - sortKey(a); });
          if (group.length === 0) return "";
          return '<div class="pubgroup">' +
            '<h4 class="pubgroup__label">' + TYPE_LABEL[type] + "</h4>" +
            '<ul class="publist">' + group.map(pubItem).join("") + "</ul></div>";
        }).join("");
      }

      return '<article class="theme">' +
        (t.period ? '<span class="theme__period">' + esc(t.period) + "</span>" : "") +
        '<h3 class="theme__title">' + esc(t.title) + "</h3>" +
        '<p class="theme__desc">' + esc(t.description) + "</p>" +
        body +
      "</article>";
    }).join("");
  }

  /* ---------- プロジェクト ---------- */
  function renderProjects() {
    var box = byId("projectList");
    if (!box) return;

    box.innerHTML = (D.projects || []).map(function (pr) {
      var figure = pr.image
        ? '<img src="' + esc(pr.image) + '" alt="' + esc(pr.title) + 'の写真" loading="lazy">'
        : '<div class="card__ph">画像を追加</div>';
      var list = Array.isArray(pr.links) ? pr.links.slice() : [];
      if (pr.link) list.push({ label: pr.linkLabel || "詳細を見る", url: pr.link });
      var link = list.filter(function (l) { return l.url; }).map(function (l) {
        return '<a class="card__link" href="' + esc(l.url) + '" target="_blank" rel="noopener">' +
          esc(l.label) + " &rarr;</a>";
      }).join("");
      if (link) link = '<div class="card__links">' + link + "</div>";
      return '<article class="card">' +
        '<figure class="card__figure">' + figure + "</figure>" +
        '<div class="card__body">' +
          '<span class="card__year">' + esc(pr.year) + "</span>" +
          '<h3 class="card__title">' + esc(pr.title) + "</h3>" +
          '<p class="card__desc">' + esc(pr.description) + "</p>" +
          link +
        "</div></article>";
    }).join("");
  }

  /* ---------- 学歴・職歴（同じ形式で表示します） ---------- */
  function renderTrack(elementId, items) {
    var box = byId(elementId);
    if (!box) return;
    box.innerHTML = (items || []).map(function (it) {
      return '<li class="job">' +
        '<span class="job__period">' + esc(it.period) + "</span>" +
        '<p class="job__role">' + esc(it.title) + "</p>" +
        (it.description ? '<p class="job__desc">' + esc(it.description) + "</p>" : "") +
      "</li>";
    }).join("");
  }

  /* ---------- リンク ---------- */
  function renderLinks() {
    var box = byId("linkList");
    if (!box) return;
    box.innerHTML = (D.links || [])
      .filter(function (l) { return l.url; })
      .map(function (l) {
        return '<li><a href="' + esc(l.url) + '" target="_blank" rel="noopener">' +
          esc(l.label) + "</a></li>";
      }).join("");
  }

  /* ---------- 現在位置に応じてナビを強調 ---------- */
  function initScrollSpy() {
    var links = Array.prototype.slice.call(
      document.querySelectorAll(".rail__nav a")
    );
    var sections = links
      .map(function (a) { return document.querySelector(a.getAttribute("href")); })
      .filter(Boolean);
    if (!("IntersectionObserver" in window) || sections.length === 0) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) {
          a.classList.toggle(
            "is-active",
            a.getAttribute("href") === "#" + entry.target.id
          );
        });
      });
    }, { rootMargin: "-25% 0px -65% 0px" });

    sections.forEach(function (s) { observer.observe(s); });
  }

  fillBindings();
  renderNav();
  renderThemes();
  renderProjects();
  renderTrack("educationList", D.education);
  renderTrack("experienceList", D.experience);
  renderLinks();
  initScrollSpy();
})();
