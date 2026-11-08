// Newest first. Fields:
//   id        unique key
//   title     paper title            url   title link
//   authors   names from PEOPLE; trailing * (equal contribution) / † (equal advising) allowed;
//             "Marius Memmel" renders bold; "..." renders as-is
//   venue     array of HTML lines (rendered italic)
//   notes     optional array of HTML lines, rendered in red (e.g. oral presentations)
//   extra     optional HTML line (italic) under the authors
//   links     [label, url] pairs
//   thumb     { before, after?, fit? }  (fit: "cover" default, or "contain" for logos/diagrams) -- "after" (gif) fades in on hover
const PUBLICATIONS = [
  {
    id: "dna",
    title: "D&A: Decoupling Description and Assessment Enables VLMs as Zero-Shot Robotic Reward Models",
    url: "https://weirdlabuw.github.io/dna",
    authors: [
      "Marius Memmel", "Shawn Yin*", "Urvi Rutia*", "Angad Wadhwa*", "Eldon Li", "Gavin Angeloff",
      "Ankit Goyal", "Jesse Zhang", "Dieter Fox", "Fabio Ramos", "Anqi Li†", "Abhishek Gupta†",
    ],
    venue: ["Workshop on Continually Self-Improving Robots at CoRL, 2026"],
    notes: ["Oral Presentation at the Sample-Efficient Real-World RL workshop"],
    links: [
      ["paper", "https://weirdlabuw.github.io/static/papers/dna.pdf"],
      ["arxiv", "https://arxiv.org/abs/2611.03622"],
      ["website", "https://weirdlabuw.github.io/dna"],
      ["code", "https://github.com/memmelma/dna"],
    ],
    thumb: { before: "images/dna_before.png", after: "images/dna_after.gif" },
  },
  {
    id: "peek",
    title: "PEEK: Guiding and Minimal Image Representations for Zero-Shot Generalization of Robot Manipulation Policies",
    url: "https://peek-robot.github.io/",
    authors: [
      "Jesse Zhang*", "Marius Memmel*", "Kevin Kim", "Dieter Fox", "Jesse Thomason",
      "Fabio Ramos", "Erdem Bıyık", "Abhishek Gupta†", "Anqi Li†",
    ],
    venue: ["Under Submission"],
    links: [
      ["arxiv", "https://arxiv.org/abs/2509.18282"],
      ["website", "https://peek-robot.github.io/"],
      ["code", "https://github.com/peek-robot/peek"],
    ],
    thumb: { before: "images/peek_before.png", fit: "contain", after: "images/peek_after.gif" },
  },
  {
    id: "maniflow",
    title: "ManiFlow: A General Robot Manipulation Policy via Consistency Flow Training",
    url: "https://maniflow-policy.github.io/",
    authors: [
      "Ge Yan", "Jiyue Zhu*", "Yuquan Deng*", "Shiqi Yang", "Ri-Zhao Qiu", "Xuxin Cheng",
      "Marius Memmel", "Ranjay Krishna†", "Ankit Goyal†", "Xiaolong Wang†", "Dieter Fox†",
    ],
    venue: ["Conference on Robot Learning (CoRL), 2025"],
    links: [
      ["arxiv", "https://arxiv.org/abs/2509.01819"],
      ["website", "https://maniflow-policy.github.io/"],
      ["code", "https://github.com/geyan21/ManiFlow_Policy"],
    ],
    thumb: { before: "images/maniflow_before.gif", after: "images/maniflow_after.gif" },
  },
  {
    id: "selfrevision",
    title: "Making VLMs More Robot-Friendly: Self-Critical Distillation of Low-Level Procedural Reasoning",
    url: "https://arxiv.org/abs/2507.08224",
    authors: [
      "Chan Young Park*", "Jillian Fisher*", "Marius Memmel", "Dipika Khullar",
      "Seoho Yun", "Abhishek Gupta", "Yejin Choi",
    ],
    venue: ["Empirical Methods in Natural Language Processing (EMNLP), 2025"],
    links: [
      ["arxiv", "https://arxiv.org/abs/2507.08224"],
      ["code", "https://github.com/chan0park/SelfReVision"],
    ],
    thumb: { before: "images/selfrevision_before.png", fit: "contain" },
  },
  {
    id: "strap",
    title: "STRAP: Robot Sub-Trajectory Retrieval for Augmented Policy Learning",
    url: "https://memmelma.github.io/",
    authors: ["Marius Memmel*", "Jacob Berg*", "Bingqing Chen", "Abhishek Gupta†", "Jonathan Francis†"],
    venue: ["Conference on Learning Representations (ICLR), 2025"],
    links: [
      ["paper", "files/strap_2025.pdf"],
      ["arxiv", "https://arxiv.org/abs/2412.15182"],
      ["website", "https://weirdlabuw.github.io/strap/"],
      ["code", "https://github.com/WEIRDLabUW/STRAP"],
    ],
    thumb: { before: "images/strap_before.png", fit: "contain", after: "images/strap_after.gif" },
  },
  {
    id: "hamster",
    title: "HAMSTER: Hierarchical Action Models for Open-World Robot Manipulation",
    url: "https://openreview.net/pdf?id=I9fQcOrHv9",
    authors: [
      "Yi Li*", "Yuquan Deng*", "Jesse Zhang*", "Joel Jang", "Marius Memmel", "Caelan Garrett",
      "Fabio Ramos", "Dieter Fox", "Anqi Li", "Abhishek Gupta", "Ankit Goyal",
    ],
    venue: ["Conference on Learning Representations (ICLR), 2025"],
    links: [
      ["paper", "https://hamster-robot.github.io/paper.pdf"],
      ["arxiv", "https://arxiv.org/abs/2502.05485"],
      ["website", "https://hamster-robot.github.io/"],
    ],
    thumb: { before: "images/hamster_before.png", after: "images/hamster_after.gif" },
  },
  {
    id: "drawer",
    title: "DRAWER: Digital Reconstruction and Articulation With Environment Realism",
    url: "https://openaccess.thecvf.com/content/CVPR2025/papers/Xia_DRAWER_Digital_Reconstruction_and_Articulation_With_Environment_Realism_CVPR_2025_paper.pdf",
    authors: [
      "Hongchi Xia", "Entong Su", "Marius Memmel", "Arhan Jain", "Raymond Yu",
      "Numfor Mbiziwo-Tiapo", "Ali Farhadi", "Abhishek Gupta", "Shenlong Wang", "Wei-Chiu Ma",
    ],
    venue: ["Computer Vision and Pattern Recognition Conference (CVPR), 2025"],
    links: [
      ["paper", "https://openaccess.thecvf.com/content/CVPR2025/papers/Xia_DRAWER_Digital_Reconstruction_and_Articulation_With_Environment_Realism_CVPR_2025_paper.pdf"],
      ["arxiv", "https://arxiv.org/abs/2504.15278"],
      ["website", "https://xiahongchi.github.io/DRAWER/"],
      ["code", "https://github.com/xiahongchi/DRAWER"],
    ],
    thumb: { before: "images/drawer_before.gif", after: "images/drawer_after.gif" },
  },
  {
    id: "urdformer",
    title: "URDFormer: A Pipeline for Constructing Articulated Simulation Environments from Real-World Images",
    url: "https://openreview.net/pdf?id=I9fQcOrHv9",
    authors: [
      "Zoey Chen", "Aaron Walsman", "Marius Memmel", "Kaichun Mo", "Alex Fang",
      "Dieter Fox*", "Abhishek Gupta*",
    ],
    venue: ["Robotics: Science and Systems (RSS), 2024"],
    notes: ["Oral Presentation at CoRL TGR workshop"],
    links: [
      ["paper", "https://openreview.net/pdf?id=I9fQcOrHv9"],
      ["website", "https://urdformer.github.io/"],
      ["code", "https://github.com/WEIRDLabUW/urdformer"],
    ],
    thumb: { before: "images/urdformer_before.png", fit: "contain", after: "images/rss_urdformer.gif" },
  },
  {
    id: "droid",
    title: "DROID: A Large-Scale In-The-Wild Robot Manipulation Dataset",
    url: "https://arxiv.org/abs/2403.12945",
    authors: [
      "Alexander Khazatsky*", "Karl Pertsch*", "Suraj Nair", "...", "Marius Memmel", "...",
      "Thomas Kollar", "Sergey Levine", "Chelsea Finn",
    ],
    extra: 'WEIRD Lab lead together with <a href="https://arhanjain.github.io/">Arhan Jain</a>',
    venue: ["Robotics: Science and Systems (RSS), 2024"],
    links: [
      ["arxiv", "https://arxiv.org/abs/2403.12945"],
      ["website", "https://droid-dataset.github.io/"],
    ],
    thumb: { before: "images/droid_before.png", fit: "contain", after: "images/droid_after.gif" },
  },
  {
    id: "asid",
    title: "ASID: Active Exploration for System Identification in Robotic Manipulation",
    url: "http://arxiv.org/abs/2404.12308",
    authors: [
      "Marius Memmel", "Andrew Wagenmaker", "Chuning Zhu", "Patrick Yin", "Dieter Fox", "Abhishek Gupta",
    ],
    venue: ["Conference on Learning Representations (ICLR), 2024"],
    notes: ["Oral Presentation, top 1.2%"],
    links: [
      ["paper", "https://openreview.net/pdf?id=jNR6s6OSBT"],
      ["arxiv", "http://arxiv.org/abs/2404.12308"],
      ["website", "https://weirdlabuw.github.io/asid/"],
      ["code", "https://github.com/WEIRDLabUW/asid"],
    ],
    thumb: { before: "images/asid_before.jpg", fit: "contain", after: "images/asid_after.gif" },
  },
  {
    id: "vot",
    title: "Modality-invariant Visual Odometry for Embodied Vision",
    url: "https://arxiv.org/abs/2305.00348",
    authors: ["Marius Memmel", "Roman Bachmann", "Amir Zamir"],
    venue: ["Conference on Computer Vision and Pattern Recognition (CVPR), 2023"],
    links: [
      ["paper", "https://openaccess.thecvf.com/content/CVPR2023/html/Memmel_Modality-Invariant_Visual_Odometry_for_Embodied_Vision_CVPR_2023_paper.html"],
      ["arxiv", "https://arxiv.org/abs/2305.00348"],
      ["website", "https://memmelma.github.io/vot/"],
      ["poster", "files/poster_cvpr_2023.pdf"],
      ["code", "https://github.com/memmelma/VO-Transformer/"],
    ],
    thumb: { before: "images/vot.jpg", fit: "contain", after: "images/embodied_nav.gif" },
  },
  {
    id: "interdis",
    title: "Interactive Disentanglement: Learning Concepts by Interacting with their Prototype Representations",
    url: "https://openaccess.thecvf.com/content/CVPR2022/papers/Stammer_Interactive_Disentanglement_Learning_Concepts_by_Interacting_With_Their_Prototype_Representations_CVPR_2022_paper.pdf",
    authors: ["Wolfgang Stammer", "Marius Memmel", "Patrick Schramowski", "Kristian Kersting"],
    venue: ["Conference on Computer Vision and Pattern Recognition (CVPR), 2022"],
    links: [
      ["paper", "https://openaccess.thecvf.com/content/CVPR2022/papers/Stammer_Interactive_Disentanglement_Learning_Concepts_by_Interacting_With_Their_Prototype_Representations_CVPR_2022_paper.pdf"],
      ["arxiv", "https://arxiv.org/abs/2112.02290"],
      ["code", "https://github.com/ml-research/XIConceptLearning"],
    ],
    thumb: { before: "images/inter_dis_1.jpg", after: "images/inter_dis_2.jpg" },
  },
  {
    id: "drcreps",
    title: "Dimensionality Reduction and Prioritized Exploration for Policy Search",
    url: "https://proceedings.mlr.press/v151/memmel22a/memmel22a.pdf",
    authors: ["Marius Memmel", "Puze Liu", "Davide Tateo", "Jan Peters"],
    venue: ["International Conference on Artificial Intelligence and Statistics (AISTATS), 2022"],
    links: [
      ["paper", "https://proceedings.mlr.press/v151/memmel22a/memmel22a.pdf"],
      ["arxiv", "https://arxiv.org/abs/2203.04791"],
      ["code", "https://git.ias.informatik.tu-darmstadt.de/ias_code/aistats2022/dr-creps"],
      ["poster", "files/poster_aistats_2022.pdf"],
    ],
    thumb: { before: "images/ball_rolling_before.gif", after: "images/ball_rolling_after.gif" },
  },
  {
    id: "acs",
    title: "Adversarial Continual Learning for Multi-Domain Hippocampal Segmentation",
    url: "https://link.springer.com/chapter/10.1007/978-3-030-87722-4_4",
    authors: ["Marius Memmel", "Camila Gonzalez", "Anirban Mukhopadhyay"],
    venue: [
      "Domain Adaptation and Representation Transfer (DART) at Medical Image Computing and Computer Assisted Intervention (MICCAI), 2021",
    ],
    links: [
      ["paper", "https://link.springer.com/chapter/10.1007/978-3-030-87722-4_4"],
      ["arxiv", "https://arxiv.org/abs/2107.08751"],
      ["code", "https://github.com/MECLabTUDA/ACS"],
      ["poster", "files/dart_poster_2021.pdf"],
      ["video", "video/memmel_paper_13_video.mp4"],
    ],
    thumb: { before: "images/acs_before.jpg", after: "images/acs_after.jpg" },
  },
];
