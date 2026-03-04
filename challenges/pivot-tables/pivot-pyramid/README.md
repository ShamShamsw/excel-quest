# 🏆 Pivot Pyramid

**Category:** Pivot Tables  
**Difficulty:** 🔵 Journeyman  
**Skills Learned:** Pivot Tables, grouping, slicers, calculated fields  
**Estimated Time:** 30–45 minutes

---

## 📖 The Story

The ancient architects of the Data Dynasty are building a great pyramid, and each level must be built from perfectly summarized sales data. The ground level needs totals by **region**. The second level needs totals by **product**. The third level needs a breakdown by **month**. Only a master of Pivot Tables can provide the summaries quickly enough — before the sand runs out!

## 🎯 Your Mission

- Create a Pivot Table that summarizes total sales by **Region**
- Create a second Pivot Table that breaks down sales by **Product**
- Group date fields to show sales by **Month**
- Add a **Slicer** to filter the data interactively by region
- Add a **calculated field** that computes profit margin (if not already in the data)

## 📁 Files

| File | Description |
|------|-------------|
| `challenge.xlsx` | Your starting point — open this in Excel *(add manually; see note below)* |
| `solution.ipynb` | Step-by-step solution walkthrough (Jupyter Notebook) |

> **Note:** `challenge.xlsx` is not committed to the repository. The `solution.ipynb` generates equivalent sample data using `pandas` so you can follow along without the file.

## 💡 Hints

<details>
<summary>Hint 1 — Dragging Fields to Rows and Values</summary>

When creating a Pivot Table in Excel:
1. Click inside your data range, then go to **Insert → PivotTable**
2. In the PivotTable Fields pane, drag **Region** to the **Rows** area
3. Drag **Sales** to the **Values** area — it will automatically sum by region
4. To change the aggregation, click the field in Values and choose "Value Field Settings"

</details>

<details>
<summary>Hint 2 — Grouping Date Fields by Month</summary>

After adding a date column to Rows:
1. Right-click any date value in the Pivot Table
2. Select **Group...**
3. Choose **Months** (or Months + Years for multi-year data)
4. Click OK — Excel will collapse individual dates into monthly summaries

</details>

## ✅ Success Criteria

- A Pivot Table correctly shows total sales by Region
- A second Pivot Table correctly shows sales by Product
- Date grouping correctly collapses the data into monthly summaries
- A Slicer is connected to the Pivot Table and filters correctly when clicked
- The Pivot Table matches the expected summary values in the solution notebook

## 🔗 Next Challenges

- [Dashboard Duel](../../data-analysis/dashboard-duel/) — Visualize your pivot table summaries with charts
- [INDEX-MATCH Maze](../../formulas/index-match-maze/) — Use advanced lookups to enhance your analysis
