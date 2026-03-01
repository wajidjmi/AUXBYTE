/**
 * Google Apps Script — Auxbyte Contact Form Handler
 * ==================================================
 * This script receives contact form submissions from auxbyte.com
 * and appends them as new rows in the Google Sheet.
 *
 * SETUP STEPS:
 * 1. Open your Google Sheet:
 *    https://docs.google.com/spreadsheets/d/1ahp_z3RLCyctdO4EOEoU7eqdWxx992ienxZC-lYdFWs/edit
 *
 * 2. Add these column headers in Row 1 (A1 to I1):
 *    Name | Email | Mobile | Company | Service | Budget | Description | Timestamp | Working Status
 *
 * 3. Go to Extensions → Apps Script
 *
 * 4. Delete any existing code in Code.gs and paste this ENTIRE file
 *
 * 5. Click Deploy → New deployment
 *    - Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 *    - Click Deploy
 *
 * 6. Copy the Web App URL (looks like: https://script.google.com/macros/s/AKfyc.../exec)
 *
 * 7. Paste that URL in src/app/contact/page.tsx replacing YOUR_DEPLOYMENT_ID
 *    const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec";
 */

/**
 * doPost — Handles incoming POST requests from the contact form.
 * Parses JSON body and appends a new row to the active sheet.
 */
function doPost(e) {
  try {
    // Parse the incoming JSON data
    var data = JSON.parse(e.postData.contents);

    // Open the spreadsheet (uses the spreadsheet this script is attached to)
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Append a new row with all form fields
    // Column order: Name | Email | Mobile | Company | Service | Budget | Description | Timestamp | Working Status
    sheet.appendRow([
      data.name || "",
      data.email || "",
      data.mobile || "",
      data.company || "",
      data.service || "",
      data.budget || "",
      data.description || "",
      data.timestamp || new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      data.workingStatus || ""
    ]);

    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ status: "success", message: "Data saved" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * doGet — Handles GET requests (for testing the deployment).
 * Visit the Web App URL in a browser to verify it's working.
 */
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: "ok",
      message: "Auxbyte Contact Form API is running. Send POST requests to submit data."
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
