# Google Sheets Integration Setup Guide

## Step 1: Open Your Google Sheet
Go to: https://docs.google.com/spreadsheets/d/1ahp_z3RLCyctdO4EOEoU7eqdWxx992ienxZC-lYdFWs/edit

## Step 2: Add Headers
In Row 1, add these column headers:
| A | B | C | D | E | F | G | H | I |
|---|---|---|---|---|---|---|---|---|
| Timestamp | Name | Email | Mobile | Company | Service | Budget | Description | Working Status |

## Step 3: Create Apps Script
1. Go to **Extensions → Apps Script**
2. Delete existing code and paste this:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.timestamp || new Date().toLocaleString(),
      data.name || "",
      data.email || "",
      data.mobile || "",
      data.company || "",
      data.service || "",
      data.budget || "",
      data.description || "",
      data.workingStatus || ""
    ]);

    // Optional: Send email notification
    MailApp.sendEmail({
      to: "wajid.jmi@gmail.com",
      subject: "New Contact Form Submission - " + data.name,
      body: "Name: " + data.name + "\n" +
            "Email: " + data.email + "\n" +
            "Mobile: " + data.mobile + "\n" +
            "Service: " + data.service + "\n" +
            "Description: " + data.description
    });

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Step 4: Deploy
1. Click **Deploy → New Deployment**
2. Select type: **Web app**
3. Execute as: **Me**
4. Who has access: **Anyone**
5. Click **Deploy** and **Authorize**
6. Copy the Web App URL

## Step 5: Update Your Code
Open `src/app/contact/page.tsx` and replace:
```
const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec";
```
With your actual deployment URL.

## Done!
Your contact form will now save submissions to Google Sheets automatically.
