# COMP2711

课程总入口：`index.html` → **Logic**（L1.1、L1.2、L1.3）→ **Sets and Functions**（L1.4）→ **Counting**（原有 L1.5 标记）。前两个模块包含 189 页课件、22 节主题课和 48 道已核对原题；Counting 仍有原来的 39 页、8 节课和 17 道原题。

网站继续放在原 `courses/l2-5` 目录，以保留原有课程 URL。页面品牌统一为 COMP2711；L2.5 是章节名称。

直接用浏览器打开 `index.html`。无需安装、服务器或网络；移动文件夹时请保留整个 `l2-5` 目录。整课完成进度和解题草稿保存在当前浏览器；新增章节使用各自的 `comp2711:l1-N:` 存储空间，Counting 沿用 `comp2711:l2-5:`。更换浏览器或清除浏览器数据不会同步这些记录。

每课末尾勾选“我已学完这课”，总首页、模块页和章节目录按已学完的课程数显示进度，总首页可继续最近学习的课程。旧的逐页／逐题记录不再计入进度，Counting 的完成记录与解题草稿保留。

每页课件讲解旁均有可输入的笔记区（窄屏显示在讲解下方），输入后立即自动保存。同一原页在课程页和独立课件页共享笔记，不同章节及页码各自独立。笔记仅保存在当前浏览器，清除浏览器数据会删除笔记；保存失败时页面会提示复制备份。

新增四章严格按 L1.1 → L1.2 → L1.3 → L1.4 的原始 PDF 页序逐页讲解。每页原文及 SHA-256、原页图、独立网页和真实处理日志位于 `chapters/l1-N/`；`course.config.json` 记录唯一的主题归属，`source-map.html` 可按原页码定位。L1.4 第 41 页是函数性质回顾，归入函数课，该课内页码仍保持原序。

每课讲解之后展示匹配的已验证原题，折叠答案保留题库解析与官方答案出处。没有适合的已验证原题时显示零题说明，不补造题目。题目快照及本地原始 PDF 位于各章的 `sources/`，`practice.json` 保存题目 ID、出处页和哈希。

Counting 原有 39 页课件分为 8 个知识主题；17 道练习均保留原题、原始知识库记录和本地 PDF 出处。树形图一课没有适合当前知识范围的已验证题目，因此没有补造题目。

## 内容与追踪

- `responses/01.md` 至 `39.md`：当前对话 AI 逐页生成的原始回答，固定提示词为「解释一下」。
- `slides/`：原课件各页图像；`sources/L2.5.pptx` 是未改动的源文件副本。
- `manifest.json`：每页的提示词、原文 SHA-256、网页路径、状态和主题。
- `events.jsonl`：按真实执行顺序追加的处理记录，包括失败的导出尝试；每次成功的 `page_presented` 之后是同一页的 `page_written`，才出现下一页。
- `course.config.json`：主题归属；只改变组合顺序，不改写解释。
- `practice.json`、`sources/notes/`、`sources/papers/`：选题及出处快照。

原页图在所有讲解完成后逐张重新导出，使用本机已有 Office 字体修复替代字体造成的错位；记录为 `image_rerendered`，没有重新生成解释。第 26 页下半部原稿本身采用白色文字；原图保留该设置，完整解释仍覆盖其错误计数方法。

## 维护与校验

仅重建网页（不调用 AI）：

```sh
npm ci --prefix tools
node tools/build.mjs
node tools/validate.mjs
python3 tools/chapter-practice.py
node tools/chapter-lessons.mjs
python3 tools/validate-chapters.py
node tools/validate-chapter-text.mjs
```

可给验证器附上原始 PPT 的绝对路径，额外比较原件与网站副本。`tools/serial.py` 是单页输入与写入工具；现有 39 页均已完成，不能再准备第 40 页或重新提交完成页。重建发现原文哈希改变时会停止。若日后发现讲解错误，应新增独立勘误，不能静默改写 `responses/`。

新增章节的页序处理工具是 `tools/chapter-serial.py`；所有 189 页均已写入，不能再准备下一页。`chapter-practice.py` 仅从已验证题库重新快照原题，`chapter-lessons.mjs` 仅重建显示层且会核对回答哈希。构建依赖只用于维护。访问者使用的公式 CSS、字体、脚本和图片已全部保存在网站内。

新增章节验收：`validate-chapters.py` 通过 189 页、22 课、48 题、223 个 HTML 文件及 5204 条本地引用检查；`validate-chapter-text.mjs` 确认 189 份完整回答原样入课和 4325 处本地 KaTeX 渲染。浏览器实测了桌面／390 像素窄屏、答案展开、草稿与整课状态刷新、Counting 旧记录汇总；离线 `file://` 页面实测了公式、样式、原页图、草稿和首页继续学习。
