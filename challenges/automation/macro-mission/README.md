# 🏆 Macro Mission

**Category:** Automation  
**Difficulty:** 🟣 Master  
**Skills Learned:** VBA Macros, recording macros, loops, conditional logic in VBA  
**Estimated Time:** 45–60 minutes

---

## 📖 The Story

You're a secret agent embedded deep inside a rival corporation. Every morning, a new sales report lands in your inbox — multiple sheets, inconsistent formatting, no summary row. Your handler is watching. The mission: **automate the formatting and summary** using a Macro so that one click transforms the chaos into a pristine, professional report. Your cover depends on it. Fail, and the mission is blown. Succeed, and you'll have time to escape before dawn.

## 🎯 Your Mission

- Use the **Macro Recorder** to record the formatting steps (bold headers, auto-fit columns, apply borders)
- Open the **VBA Editor** and inspect the recorded code
- Edit the macro to add a **loop** that applies the same formatting to *every sheet* in the workbook
- Add **conditional logic** that skips any sheet named "Summary"
- Create a second macro that generates a summary row at the bottom of each sheet

## 📁 Files

| File | Description |
|------|-------------|
| `challenge.xlsx` | Your starting point — open this in Excel *(add manually; see note below)* |
| `solution.ipynb` | Step-by-step solution walkthrough (Jupyter Notebook) |

> **Note:** `challenge.xlsx` is not committed to the repository. The `solution.ipynb` demonstrates the equivalent data manipulation in Python and provides the VBA code you would use in Excel.

## 💡 Hints

<details>
<summary>Hint 1 — Using the Macro Recorder</summary>

1. Go to **View → Macros → Record Macro** (or the Developer tab if enabled)
2. Give your macro a name (e.g., `FormatReport`) and click OK
3. Perform the formatting steps manually: bold the header row, auto-fit columns, add borders
4. Click **Stop Recording**
5. Run your macro with **Alt+F8** → select the macro → Run

</details>

<details>
<summary>Hint 2 — Opening the VBA Editor</summary>

Press **Alt+F11** to open the Visual Basic Editor. Your recorded macro will appear in a module under the workbook name. The basic structure of a loop over all sheets looks like this:

```vba
Dim ws As Worksheet
For Each ws In ThisWorkbook.Worksheets
    If ws.Name <> "Summary" Then
        ' Apply formatting here
    End If
Next ws
```

</details>

## ✅ Success Criteria

- The macro runs without errors on a workbook with at least 3 data sheets
- All data sheets are formatted: bold headers, auto-fit columns, borders applied
- The "Summary" sheet (if it exists) is skipped by the loop
- A summary row is added at the bottom of each data sheet showing column totals
- The macro can be assigned to a button and triggered with one click

## 🔗 Next Challenges

- [Power Query Quest](../../advanced/power-query-quest/) — Automate data transformation at the import stage
- [Dashboard Duel](../../data-analysis/dashboard-duel/) — Build a visual dashboard on top of your automated data
