# 🏆 Dashboard Duel

**Category:** Data Analysis  
**Difficulty:** 🔵 Journeyman  
**Skills Learned:** Charts, conditional formatting, data bars, sparklines, named ranges  
**Estimated Time:** 40–60 minutes

---

## 📖 The Story

Two rival data analysts — you and your nemesis — have been given the same raw sales dataset. The challenge: whoever builds the most **clear, insightful, and visually compelling** Excel dashboard wins the contract. You have until end of day. Your nemesis is already at their keyboard. Go.

## 🎯 Your Mission

- Insert a **Bar Chart** showing total sales by product
- Insert a **Line Chart** showing monthly sales trends
- Apply a **Conditional Formatting Color Scale** (heatmap) to the revenue column
- Add **Sparklines** in a summary table to show trends at a glance
- Create **Named Ranges** for your key data to make formulas readable
- Arrange all elements into a clean, single-sheet dashboard

## 📁 Files

| File | Description |
|------|-------------|
| `challenge.xlsx` | Your starting point — open this in Excel *(add manually; see note below)* |
| `solution.ipynb` | Step-by-step solution walkthrough (Jupyter Notebook) |

> **Note:** `challenge.xlsx` is not committed to the repository. The `solution.ipynb` generates sample data and demonstrates the analysis in Python.

## 💡 Hints

<details>
<summary>Hint 1 — Inserting Charts from a Data Range</summary>

1. Select the data you want to chart (include headers)
2. Go to **Insert** tab → **Charts** group
3. Choose your chart type (e.g., Clustered Bar for product comparison)
4. Use **Chart Design → Select Data** to adjust the series and categories
5. Move the chart to your dashboard area by dragging it

</details>

<details>
<summary>Hint 2 — Conditional Formatting Color Scales</summary>

1. Select the range you want to format (e.g., the Revenue column)
2. Go to **Home → Conditional Formatting → Color Scales**
3. Choose a 3-color scale (e.g., Red-Yellow-Green) — low values get red, high values get green
4. For Data Bars, go to **Conditional Formatting → Data Bars** — they show relative magnitude in each cell

</details>

## ✅ Success Criteria

- Dashboard contains at least one bar chart and one line chart
- A conditional formatting color scale or heatmap is applied to a data range
- Sparklines are present in the summary table and correctly reflect the data trends
- Named ranges are used in at least one formula on the dashboard
- The dashboard is readable and visually clear — labels, titles, and a legend are present

## 🔗 Next Challenges

- [Power Query Quest](../../advanced/power-query-quest/) — Combine multiple data sources before building your dashboard
- [Pivot Pyramid](../../pivot-tables/pivot-pyramid/) — Use pivot tables to prepare your summary data
