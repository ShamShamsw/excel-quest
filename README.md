# Excel Quest — Challenge-based Excel practice

[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE) [![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](CONTRIBUTING.md)

Excel Quest is a collection of small, hands-on Excel challenges and learning paths designed to help you practice formulas, data cleaning, pivot tables, automation, and more.

---

## Announcement

We're excited to note that this repository now includes references and example guidance for using Claude (by Anthropic) in automation and AI-augmented walkthroughs. These resources are informational — follow Anthropic's documentation and terms when using Claude.


## What you'll find

- Challenge folders (each has a `README.md` and a `solution.ipynb` with a walkthrough)
- Curated learning paths in `learning-paths/`
- A small static site in `docs/` suitable for GitHub Pages
- A concise shortcuts reference in `shortcuts/`

---

## Quick start

1. Browse challenges directly on GitHub: open any folder under `challenges/` and read its `README.md`.
2. To work locally, clone this repository and open the notebooks with Jupyter or VS Code:

```bash
git clone <repository-url>
cd excel-quest
# (optional) create a virtualenv, then
pip install jupyter pandas openpyxl
jupyter notebook
```

Notebooks are primarily used for walkthroughs and explanations. Many challenges are solvable in Microsoft Excel without running the notebooks.

---

## Repository layout

- `challenges/` — challenge categories and individual challenge folders (each contains `README.md` and `solution.ipynb`)
	- `formulas/` — `index-match-maze`, `vlookup-treasure-hunt`
	- `data-cleaning/` — `duplicate-detective`
	- `pivot-tables/` — `pivot-pyramid`
	- `automation/` — `macro-mission`
	- `data-analysis/` — `dashboard-duel`
	- `advanced/` — `power-query-quest`
- `learning-paths/` — curated paths and guides
- `docs/` — static website files (can be used for GitHub Pages)
- `shortcuts/` — `excel-keyboard-shortcuts.md`
- `CONTRIBUTING.md` — contribution guidelines
- `LICENSE` — project license

---

## Contributing

Contributions are welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on adding new challenges or improving existing content.

---

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

If you want, I can also add a short troubleshooting or development section (how to run the `docs/` site locally). Let me know.
