/* =====================================================================
   サイトの中身はすべてこのファイルで管理します。
   HTML や CSS を触らなくても、ここを書き換えれば表示が変わります。
   文字列は "ダブルクォート" で囲み、各項目の末尾のカンマを消さないでください。

   業績データは researchmap のエクスポート（2026/08/29 時点）を反映しています。
   ===================================================================== */

const SITE_DATA = {

  /* ------------------------------------------------------------------
     1. 基本情報
     ------------------------------------------------------------------ */
  profile: {
    nameJa: "中谷 樹",
    nameEn: "Tatsuki Nakatani",
    affiliation: "東京科学大学 工学院 機械系\nエンジニアリングデザインコース 博士後期課程",
    lead: "炭素繊維複合材料の接合技術を軸に、宇宙構造物の材料研究から宇宙政策の調査、探究活動の教育支援までを横断して取り組んでいます。",
    email: "your-name [at] example.ac.jp"
  },

  /* ------------------------------------------------------------------
     2. 研究テーマ
     id は業績と紐づける識別子です。半角英数字で、変更しないでください。
     description に各テーマの説明文を書きます。
     ------------------------------------------------------------------ */
  themes: [
    {
      id: "materials",
      period: "学士 〜 博士",
      title: "複合材料のろう付・金属3D積層造形",
      description: "加筆修正予定です。"
    },
    {
      id: "space-policy",
      period: "2021 〜 現在",
      title: "宇宙政策",
      description: "加筆修正予定です。"
    },
    {
      id: "inquiry",
      period: "2023 〜 現在",
      title: "探究活動支援",
      description: "加筆修正予定です。"
    }
  ],

  /* ------------------------------------------------------------------
     3. 業績
     type は次のいずれかを指定します（この順で表示されます）。
       "journal" 論文 / "international" 国際会議 / "domestic" 国内会議・研究会
       "award" 受賞 / "grant" 競争的資金等の研究課題 / "misc" その他

     themes は配列です。複数テーマにまたがる業績は
     ["materials","space-policy"] のように並べると両方に表示されます。
     ------------------------------------------------------------------ */
  publications: [

    /* ---- 複合材料のろう付・金属3D積層造形 ---- */
    {
      year: 2026,
      title: "Brazing of carbon/carbon composite beams using gold filler with tungsten trioxide and tungsten carbide coatings",
      authors: "Tatsuki Nakatani, Takahisa Yamazaki",
      venue: "Carbon, 121264（2026年1月）査読有り・筆頭著者",
      type: "journal",
      themes: ["materials"],
      url: "https://doi.org/10.1016/j.carbon.2026.121264"
    },
    {
      year: 2025,
      title: "Brazing of C/C Composites using a developed Au-Ni-W Filler",
      authors: "Tatsuki Nakatani, Takahisa Yamazaki",
      venue: "Brazing, High Temperature Brazing and Diffusion Bonding (LÖT 2025), 399, pp.37-44（2025年6月）筆頭著者",
      type: "international",
      themes: ["materials"],
      url: "https://doi.org/10.53192/LOET20250037"
    },
    {
      year: 2022,
      title: "ワイヤ＋アーク放電を用いたアディティブ・マニュファクチャリング技術によるマルチマテリアル積層法",
      authors: "永松秀朗, 宇野澤茜, 中谷樹, 河端征大, 中島健太郎, 笹原弘之",
      venue: "第19回国際工作機械技術者会議, B-2, pp.14-15（2022年11月）招待・ポスター発表",
      type: "international",
      themes: ["materials"],
      url: ""
    },
    {
      year: 2026,
      title: "C/C複合材料のAu-Ni-Wろう付",
      authors: "中谷樹, 山﨑敬久",
      venue: "溶接学会 第132回界面接合研究委員会（2026年6月）招待講演",
      type: "domestic",
      themes: ["materials"],
      url: ""
    },
    {
      year: 2024,
      title: "直交繊維配向C/C複合材料梁のAu-Ni-Wろう付",
      authors: "中谷 樹, 山﨑 敬久",
      venue: "溶接学会 2024年度秋季全国大会, 第115集, pp.358-359（2024年9月）",
      type: "domestic",
      themes: ["materials"],
      url: "https://doi.org/10.14920/jwstaikai.2024f.0_358"
    },
    {
      year: 2023,
      title: "摩擦肉盛法とWAAM法の組み合わせによる鉄鋼基材へのアルミニウム合金の積層",
      authors: "中谷樹, 永松秀朗, 笹原弘之",
      venue: "第30回 学生会員卒業研究発表講演会, I26（2023年3月）",
      type: "domestic",
      themes: ["materials"],
      url: ""
    },
    {
      period: "2025 —",
      title: "宇宙空間でのC/C複合材料の精密組立を想定した活性金属ろう材による可逆接合技術の開発",
      program: "石福金属興業株式会社 貴金属研究開発助成金",
      role: "研究代表者",
      type: "grant",
      themes: ["materials"],
      url: "https://www.ishifuku-kinzoku.co.jp/topics/2025/grant.html"
    },
    {
      period: "2025 —",
      title: "東京工業大学つばめ博士学生奨学金（特別奨学金）",
      type: "award",
      themes: ["materials"],
      url: ""
    },
    {
      year: 2025,
      title: "日本学生支援機構 第一種奨学金 特に優れた業績による返還免除（修士課程）",
      type: "award",
      themes: ["materials"],
      url: ""
    },

    /* ---- 宇宙政策 ---- */
    {
      year: 2025,
      title: "月面核融合発電システムの評価と比較分析",
      authors: "村田晃大, 中谷樹, 大長勇登",
      venue: "第69回 宇宙科学技術連合講演会, 3B02（2025年11月）",
      type: "domestic",
      themes: ["space-policy"],
      url: ""
    },
    {
      year: 2025,
      title: "月面居住に向けたロープウェイ建築の有効性",
      authors: "早川 明日香, 待田凌, 古田摩実, 中谷樹",
      venue: "第69回 宇宙科学技術連合講演会, 2A08（2025年11月）",
      type: "domestic",
      themes: ["space-policy"],
      url: ""
    },
    {
      year: 2024,
      title: "月面核融合発電システムに関する国際動向と論点整理",
      authors: "中谷 樹, 有吉 志満",
      venue: "第68回 宇宙科学技術連合講演会, 3L04（2024年11月）筆頭発表",
      type: "domestic",
      themes: ["space-policy"],
      url: "https://jxiv.jst.go.jp/index.php/jxiv/preprint/view/1772"
    },
    {
      year: 2024,
      title: "宇宙空間における核エネルギー利用の国民理解に向けた方策",
      authors: "有吉 志満, 中谷 樹, 山口 雪乃",
      venue: "第68回 宇宙科学技術連合講演会, 3L05（2024年11月）",
      type: "domestic",
      themes: ["space-policy"],
      url: ""
    },
    {
      year: 2023,
      title: "「成長する宇宙産業」にかかわる人材基盤の強化に向けた提言",
      authors: "梅宮愛佳, 中谷樹, 有吉志満",
      venue: "第67回 宇宙科学技術連合講演会（2023年10月）",
      type: "domestic",
      themes: ["space-policy"],
      url: "https://jglobal.jst.go.jp/detail?JGLOBAL_ID=202402262621396596"
    },
    {
      year: 2023,
      title: "ロケットによる環境リスク低減を目的とした施策案とその評価",
      authors: "有吉志満, 玉田洋一朗, 阿部舞耶, 中谷樹",
      venue: "第67回 宇宙科学技術連合講演会（2023年10月）",
      type: "domestic",
      themes: ["space-policy"],
      url: "https://jglobal.jst.go.jp/detail?JGLOBAL_ID=202402243656834586"
    },
    {
      year: 2024,
      title: "宇宙での核融合エネルギー利用に関する国際動向と論点整理",
      authors: "中谷樹, 有吉志満",
      venue: "第56回ニュースペース研究会（2024年8月）招待講演",
      type: "misc",
      themes: ["space-policy"],
      url: "https://ngsl.or.jp/news/meeting-56/"
    },

    /* ---- 探究活動支援 ---- */
    {
      year: 2026,
      title: "学士課程を対象とした探究活動を支える教材開発とその検証 — 東京科学大学におけるリベラルアーツ教育を事例にして",
      authors: "黒丸愛美, 中谷樹, 岡田佐織, 鈴木健雄",
      venue: "第32回 大学教育研究フォーラム 発表論文集, pp.37-38（2026年2月）",
      type: "domestic",
      themes: ["inquiry"],
      url: ""
    },
    {
      year: 2026,
      title: "東京科学大学 探究活動の進め方ガイド",
      authors: "東京科学大学リベラルアーツプログラム, 探究WS担当TA",
      venue: "教育教材（2026年2月）",
      type: "misc",
      themes: ["inquiry"],
      url: ""
    }
  ],

  /* ------------------------------------------------------------------
     4. プロジェクト
     image に画像のパス（例 "images/port-c.jpg"）を入れると写真が表示され、
     "" のままなら「画像を追加」の枠が表示されます。
     links は複数のリンクを並べられます。不要なら空の配列 [] にします。
     ------------------------------------------------------------------ */
  projects: [
    {
      year: "2021",
      title: "第8回 宇宙建築賞 入賞「PortC」",
      description:
        "月面における宇宙港の建設構想を提案し、第8回宇宙建築賞で入賞しました。月面基地の建築アイデアとして、輸送拠点となる港湾機能と居住機能をあわせ持つ構造を検討したものです。本作品は第66回宇宙科学技術連合講演会（2022年11月）の企業展示にも出展し、学会の場で構想を発信しました。",
      image: "",
      links: [
        { label: "受賞作品ページ", url: "https://tnlabsa.wixsite.com/tnlab/%E7%AC%AC8%E5%9B%9E-%E5%84%AA%E7%A7%80%E4%BD%9C%E5%93%81" },
        { label: "第66回 宇宙科学技術連合講演会", url: "https://branch.jsass.or.jp/ukaren66/" }
      ]
    },
    {
      year: "2023",
      title: "CanSat プロジェクト — ARLISS 2023 Best Mission Award 1st Place",
      description:
        "小型宇宙機の技術実証を行うCanSatプロジェクトに授業の一環として取り組み、その後チームで自主的に国際大会ARLISSへ出場しました。月面クレータ内での水資源運搬を想定し、パイプラインを自動敷設するシステムを開発して技術実証を行い、Best Mission Award 1st Place を受賞しています。要求の異なる複数の設計要件を整理し、設計から加工までを自チームで完結させる過程で、技術面とプロジェクトマネジメントの両面を実践的に習得しました。",
      image: "",
      links: [
        { label: "ARLISS（UNISEC）", url: "https://unisec.jp/activities/arliss" }
      ]
    },
    {
      year: "2023",
      title: "エンジニアリングデザインプロジェクト（EDP）",
      description:
        "機械系エンジニアリングデザインコースにおいて、デザイン思考にもとづくプロダクト開発に取り組みました。デザイン思考はユーザーへの共感を通じて潜在的なニーズを洞察する思考法であり、工学的な専門知識を社会実装につなげる過程に関心をもって参加したものです。企業から与えられた「中長距離トラックドライバーの生活を再デザインする」というテーマに対し、ドライバーへのインタビューを反復して仮説の構築と検証を重ね、家族と離れて働くドライバーとその家族に向けたWebカメラを製作しました。成果は一般向けの最終発表会で公開しています。",
      image: "",
      links: [
        { label: "プロジェクト紹介記事", url: "https://medium.com/titech-eng-and-design/2023%E5%B9%B4%E5%BA%A6edp-%E3%81%A4%E3%81%AA%E3%81%8C%E3%82%8B%E3%83%81%E3%82%A7%E3%82%A2-team-7-%E3%82%AB%E3%83%AA%E3%83%B3%E3%83%90-c5eef5f510cc" },
        { label: "EDP Gala 2024", url: "https://edpgala-2024.peatix.com/view" }
      ]
    },
    {
      year: "2022 —",
      title: "ASE-Lab／宇宙建築学ゼミ 主宰",
      description:
        "有人宇宙居住施設の建設に関心をもち、研究に関わる知識を深めるとともに分野の裾野を広げることを目的として、オンラインの「宇宙建築学ゼミ」を主宰しています。全国から集まった学生とともに、宇宙用材料や接合法といった材料工学の話題から月面都市の形成構想まで、幅広いテーマで継続的にゼミを運営しています。",
      image: "",
      links: [
        { label: "ASE-Lab（note）", url: "https://note.com/ase_lab_/n/nc02d63dab0a2" }
      ]
    }
  ],

  /* ------------------------------------------------------------------
     5. 学歴（新しい順）
     ------------------------------------------------------------------ */
  education: [
    {
      period: "2025年4月 — 現在",
      title: "東京科学大学 工学院 機械系 エンジニアリングデザインコース 博士後期課程",
      description: ""
    },
    {
      period: "2023年4月 — 2025年3月",
      title: "東京工業大学 工学院 機械系 エンジニアリングデザインコース 修士課程",
      description: "修士（工学）"
    },
    {
      period: "2020年4月 — 2023年3月",
      title: "電気通信大学 情報理工学域 Ⅲ類 機械知能システム工学科 学士課程",
      description: ""
    },
    {
      period: "2015年4月 — 2020年3月",
      title: "茨城工業高等専門学校 機械システム工学科",
      description: ""
    }
  ],

  /* ------------------------------------------------------------------
     6. 職歴（新しい順）
     ------------------------------------------------------------------ */
  experience: [
    {
      period: "2024年 — 現在",
      title: "Webサービス・ホームページ制作",
      description: "担当した制作物や技術をここに書きます。"
    },
    {
      period: "2023年 — 現在",
      title: "東京科学大学 ティーチングアシスタント",
      description: "学士課程のエンジニアリングデザイン応用科目、およびリベラルアーツプログラムの探究ワークショップを担当しています。"
    },
    {
      period: "2021年4月 — 現在",
      title: "一般社団法人 ニュースペース国際戦略研究所（NGSL） 学生研究員",
      description: "国の宇宙政策に関する調査研究に従事しています。世界の中の日本という視座から宇宙開発の将来像を検討し、調査結果を政策提言へつなげる過程を通じて、長期的かつ広い視野を養ってきました。専門分野の異なる実務家・研究者との交流の機会も、自身のキャリア形成に活かしています。"
    }
  ],

  /* ------------------------------------------------------------------
     7. 外部リンク
     ------------------------------------------------------------------ */
  links: [
    { label: "researchmap", url: "https://researchmap.jp/Tatsuki_Nakatani" },
    { label: "ORCID",       url: "https://orcid.org/0009-0008-1385-2778" },
    { label: "J-GLOBAL",    url: "https://jglobal.jst.go.jp/detail?JGLOBAL_ID=202601013543771460" },
    { label: "GitHub",      url: "https://github.com/N-Tatsuki" },
    { label: "ASE-Lab",     url: "https://note.com/ase_lab_/n/nc02d63dab0a2" }
  ]
};
