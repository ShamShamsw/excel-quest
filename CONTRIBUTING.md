# 🤝 Contributing to Excel Quest

Thank you for your interest in contributing to **Excel Quest**! This guide explains how to propose and submit new challenges.

---

## 📋 How to Propose a New Challenge

1. **Open a GitHub Issue** using the [New Challenge template](.github/ISSUE_TEMPLATE/new-challenge.md).
2. Describe the challenge scenario, skills it teaches, and target difficulty.
3. Wait for feedback from maintainers before building out the full challenge.

---

## 📁 Challenge Folder Structure

Each challenge lives in a category folder under `challenges/` and follows this structure:

```
challenges/<category>/<challenge-name-in-kebab-case>/
├── README.md        # Challenge description, story, hints, success criteria
└── solution.ipynb   # Jupyter Notebook solution walkthrough
```

> **Note:** Binary `.xlsx` starter files should be documented in the challenge README but are not committed to the repository. Instead, the `solution.ipynb` should generate sample data programmatically using `pandas`.

---

## 🏷️ Naming Conventions

- Use **kebab-case** for all folder names (e.g., `vlookup-treasure-hunt`, not `VLookupTreasureHunt`)
- Names should be **descriptive**, not numbered (e.g., `duplicate-detective`, not `challenge-03`)
- Keep names concise but evocative — they are part of the game experience

---

## 📂 Categories

Contribute challenges to one of the existing categories or propose a new one:

| Category | Folder |
|----------|--------|
| Formulas | `challenges/formulas/` |
| Data Cleaning | `challenges/data-cleaning/` |
| Pivot Tables | `challenges/pivot-tables/` |
| Automation | `challenges/automation/` |
| Data Analysis | `challenges/data-analysis/` |
| Advanced | `challenges/advanced/` |

---

## 📊 Difficulty Levels

| Level | Badge | Description |
|-------|-------|-------------|
| 🟢 Apprentice | Beginner | Little or no prior Excel knowledge needed |
| 🔵 Journeyman | Intermediate | Some Excel experience required |
| 🟣 Master | Advanced | Complex features, VBA, or Power Query |

---

## 📝 Challenge README Template

Each challenge README must follow this template:

```markdown
# 🏆 [Challenge Name]

**Category:** [Category]  
**Difficulty:** [Apprentice / Journeyman / Master]  
**Skills Learned:** [comma-separated list]  
**Estimated Time:** [e.g., 20–30 minutes]

---

## 📖 The Story
[A short, game-flavored narrative that sets the scene]

## 🎯 Your Mission
[Clear bullet points of what the user needs to accomplish]

## 📁 Files
| File | Description |
|------|-------------|
| `challenge.xlsx` | Your starting point |
| `solution.ipynb` | Step-by-step solution walkthrough |

## 💡 Hints
<details>
<summary>Hint 1</summary>
[First hint]
</details>

## ✅ Success Criteria
[How the user knows they've completed the challenge]

## 🔗 Next Challenges
[Suggestions for what to try next]
```

---

## 💻 Jupyter Notebook Solution Format

Each `solution.ipynb` must:
- Begin with a markdown cell containing the challenge title and description
- Include a prerequisites cell (`pip install pandas openpyxl`)
- Generate sample data programmatically using `pandas` (no binary `.xlsx` files)
- Walk through the solution step by step with rich markdown explanations
- End with a success message cell
- Use educational, comment-rich code throughout

---

## 🏅 Attribution Guidelines

- The original author of this project is **ShamShamsw** (2026). Please preserve this credit in all files.
- When contributing a challenge, you may add your name in the challenge README as the challenge author.
- All contributions are licensed under the MIT License.

---

## 🔄 Pull Request Process

1. Fork the repository
2. Create a feature branch: `git checkout -b add/<challenge-name>`
3. Add your challenge following the structure above
4. Open a Pull Request with a clear description of the new challenge
5. Address any review feedback

We look forward to your contributions! 🎮
