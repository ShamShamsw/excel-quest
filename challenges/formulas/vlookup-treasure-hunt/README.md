# 🏆 VLOOKUP Treasure Hunt

**Category:** Formulas  
**Difficulty:** 🟢 Apprentice  
**Skills Learned:** VLOOKUP, exact match, approximate match, IFERROR  
**Estimated Time:** 20–30 minutes

---

## 📖 The Story

You're a pirate with a treasure map — but the map is a messy spreadsheet. The island has dozens of buried chests, each labeled with a cryptic ID. A second table holds the legend: IDs matched to their precious contents. Only a sailor who masters **VLOOKUP** can cross-reference the map, find the treasure, and calculate the total haul before the rival crew arrives!

## 🎯 Your Mission

- Use `VLOOKUP` to match chest IDs in the map table to their contents in the legend table
- Handle missing IDs gracefully using `IFERROR`
- Calculate the total gold value of a specified list of chests
- Identify the single most valuable chest on the entire island

## 📁 Files

| File | Description |
|------|-------------|
| `challenge.xlsx` | Your starting point — open this in Excel *(add manually; see note below)* |
| `solution.ipynb` | Step-by-step solution walkthrough (Jupyter Notebook) |

> **Note:** `challenge.xlsx` is not committed to the repository. The `solution.ipynb` generates equivalent sample data using `pandas` so you can follow along without the file.

## 💡 Hints

<details>
<summary>Hint 1 — Lookup Value Placement</summary>

The `lookup_value` (first argument of VLOOKUP) should be the chest ID you're searching for — the value in the *first column* of your table. Make sure your IDs are in the leftmost column of the `table_array`.

</details>

<details>
<summary>Hint 2 — Table Array Selection</summary>

Your `table_array` should include the ID column and all columns to the right that contain data you want to return. Lock the range with `$` signs (e.g., `$A$2:$C$100`) so it doesn't shift when you copy the formula down.

</details>

## ✅ Success Criteria

- All chest IDs in the map are successfully matched to their contents using VLOOKUP
- Unmatched IDs display a friendly message (e.g., `"Not Found"`) instead of `#N/A`
- The total value of specified chests is correctly calculated
- You can identify the highest-value chest using `MAX` or sorting

## 🔗 Next Challenges

- [INDEX-MATCH Maze](../index-match-maze/) — Level up your lookup skills with a more powerful technique
- [Duplicate Detective](../../data-cleaning/duplicate-detective/) — Clean up messy data before running lookups
