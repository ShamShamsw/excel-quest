# 🏆 INDEX-MATCH Maze

**Category:** Formulas  
**Difficulty:** 🔵 Journeyman  
**Skills Learned:** INDEX, MATCH, two-way lookup, left-lookup, dynamic references  
**Estimated Time:** 30–45 minutes

---

## 📖 The Story

You're trapped deep inside a data labyrinth — a sprawling spreadsheet with columns in the wrong order, rows going every direction, and no way out using `VLOOKUP` alone. The only tool powerful enough to navigate this maze? **INDEX-MATCH**. Unlike VLOOKUP, it can look to the *left*, search any column, and even perform two-dimensional lookups. Master it, and the exit is yours!

## 🎯 Your Mission

- Perform a **left-lookup** — retrieve a value from a column that is to the *left* of the search column (something VLOOKUP cannot do)
- Perform a **two-dimensional lookup** — match both a row value and a column value to pinpoint a single cell
- Build a **dynamic reference** that updates automatically when row or column criteria change
- Replace any VLOOKUP formulas in the sheet with INDEX-MATCH equivalents

## 📁 Files

| File | Description |
|------|-------------|
| `challenge.xlsx` | Your starting point — open this in Excel *(add manually; see note below)* |
| `solution.ipynb` | Step-by-step solution walkthrough (Jupyter Notebook) |

> **Note:** `challenge.xlsx` is not committed to the repository. The `solution.ipynb` generates equivalent sample data using `pandas` so you can follow along without the file.

## 💡 Hints

<details>
<summary>Hint 1 — How MATCH Returns a Position</summary>

`MATCH(lookup_value, lookup_array, match_type)` returns the **position** (row or column number) of the match, not the value itself. For an exact match, use `match_type = 0`. Combine this position with `INDEX` to retrieve the actual value.

</details>

<details>
<summary>Hint 2 — Nesting INDEX and MATCH</summary>

The full formula looks like this:
```
=INDEX(return_array, MATCH(row_lookup, row_array, 0), MATCH(col_lookup, col_array, 0))
```
- `return_array` — the full data table you want to retrieve from
- First `MATCH` — finds the row number
- Second `MATCH` — finds the column number (for two-way lookups)

</details>

## ✅ Success Criteria

- All left-lookups return correct values (columns to the left of the search key)
- The two-dimensional lookup correctly returns the value at the intersection of a row and column match
- All reverse/dynamic lookups update correctly when the search criteria change
- No `#N/A` or `#REF!` errors remain in the solution

## 🔗 Next Challenges

- [VLOOKUP Treasure Hunt](../vlookup-treasure-hunt/) — Review the simpler lookup technique first if needed
- [Pivot Pyramid](../../pivot-tables/pivot-pyramid/) — Summarize and analyze data after mastering lookups
