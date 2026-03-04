# 🏆 Duplicate Detective

**Category:** Data Cleaning  
**Difficulty:** 🟢 Apprentice  
**Skills Learned:** COUNTIF, Remove Duplicates, conditional formatting, data validation  
**Estimated Time:** 20–30 minutes

---

## 📖 The Story

The city's crime database has been compromised. Rogue data entry operators have filled it with **duplicate case files**, making it impossible for the detectives to work accurately. As the department's newly appointed Data Detective, your mission is to scan the database, expose every duplicate, and cleanse the records — before the wrong suspect gets charged twice!

## 🎯 Your Mission

- Use `COUNTIF` to flag duplicate entries in a helper column
- Apply **conditional formatting** to highlight all duplicates in red
- Use Excel's built-in **Remove Duplicates** tool to clean the dataset
- Verify the dataset is clean by checking your `COUNTIF` flags

## 📁 Files

| File | Description |
|------|-------------|
| `challenge.xlsx` | Your starting point — open this in Excel *(add manually; see note below)* |
| `solution.ipynb` | Step-by-step solution walkthrough (Jupyter Notebook) |

> **Note:** `challenge.xlsx` is not committed to the repository. The `solution.ipynb` generates equivalent sample data using `pandas` so you can follow along without the file.

## 💡 Hints

<details>
<summary>Hint 1 — COUNTIF Syntax for Duplicates</summary>

To flag duplicates in column A, add a helper column with this formula:
```
=COUNTIF($A$2:$A$100, A2)
```
Any cell showing a value greater than `1` is a duplicate. You can wrap this with `IF`:
```
=IF(COUNTIF($A$2:$A$100, A2)>1, "DUPLICATE", "OK")
```

</details>

<details>
<summary>Hint 2 — Excel's Remove Duplicates Tool</summary>

Go to **Data** tab → **Data Tools** group → **Remove Duplicates**.  
A dialog will appear letting you choose which columns to check. Make sure you select the right columns — if you only check one column, Excel will only remove rows where that specific column value repeats, not necessarily identical rows.

</details>

## ✅ Success Criteria

- A helper column correctly flags all duplicate rows using `COUNTIF`
- Duplicates are highlighted visually using conditional formatting
- After running Remove Duplicates, the dataset contains no duplicate rows
- `COUNTIF` confirms all remaining entries show `1` (no more duplicates)

## 🔗 Next Challenges

- [VLOOKUP Treasure Hunt](../../formulas/vlookup-treasure-hunt/) — Now that the data is clean, use VLOOKUP to match records
- [Pivot Pyramid](../../pivot-tables/pivot-pyramid/) — Summarize your clean dataset with pivot tables
