# 🏆 Power Query Quest

**Category:** Advanced  
**Difficulty:** 🟣 Master  
**Skills Learned:** Power Query, merging queries, transforming data, unpivoting columns, data types  
**Estimated Time:** 45–60 minutes

---

## 📖 The Story

An epic quest across **three kingdoms**, each ruled by a different data source: a CSV of customer records, an Excel table of product prices, and a web-scraped sales log. They are messy, inconsistent, and incompatible. Alone, they are useless. United through the power of **Power Query**, they become the ultimate dataset — the foundation upon which your entire analytics empire will be built. The fate of the realm is in your hands.

## 🎯 Your Mission

- Import **three separate data sources** into Power Query (simulate with three tables in Excel)
- **Clean each query**: remove null rows, rename columns, correct data types
- **Unpivot** the sales log (convert month columns into rows)
- **Merge** (join) all three queries on shared key columns
- **Load** the final clean table back to a worksheet as the master dataset

## 📁 Files

| File | Description |
|------|-------------|
| `challenge.xlsx` | Your starting point — open this in Excel *(add manually; see note below)* |
| `solution.ipynb` | Step-by-step solution walkthrough (Jupyter Notebook) |

> **Note:** `challenge.xlsx` is not committed to the repository. The `solution.ipynb` generates sample data and performs the equivalent transformations using Python so you can follow along without the file.

## 💡 Hints

<details>
<summary>Hint 1 — Opening Power Query</summary>

1. Go to the **Data** tab in Excel
2. Click **Get Data** → **From Table/Range** (if your data is already in Excel tables) or **From File** for external sources
3. Power Query Editor opens — all your transformations are recorded as steps in the Applied Steps panel on the right
4. When done, click **Close & Load** to send the result back to Excel

</details>

<details>
<summary>Hint 2 — Merging Queries</summary>

To join two queries in Power Query:
1. Open one of the queries in Power Query Editor
2. Go to **Home → Merge Queries** (or Merge Queries as New)
3. Select the second query and choose the matching columns (like a JOIN key)
4. Choose the join type (Left Outer, Inner, etc.)
5. Expand the merged column to see the fields from the second table

</details>

## ✅ Success Criteria

- All three data sources are loaded into Power Query as separate queries
- Each query has been cleaned: no nulls, correct data types, consistent column names
- The sales log is correctly **unpivoted** (months become row values, not column headers)
- All three queries are **merged** into a single master table
- The final table loads to a worksheet with the correct number of rows and columns
- No `null` values or type errors remain in the final output

## 🔗 Next Challenges

- [Dashboard Duel](../../data-analysis/dashboard-duel/) — Build a dashboard from your Power Query master dataset
- [Macro Mission](../../automation/macro-mission/) — Automate report formatting with VBA
