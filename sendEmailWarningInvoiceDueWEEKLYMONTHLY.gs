function sendEmailWarningInvoiceDueWEEKLYMONTHLY() {
  // Fetch error status
  var errorRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Timesheet: Weekly / Invoice: Monthly").getRange("R1"); 
  var errorStatus = errorRange.getValue();
  // Check totals sales
  if (errorStatus){
    // Fetch the email address
    var emailAddress = 'adam.lechnos@northstarprovisions.com';
  
    // Send Alert Email.
    var message = 'Invoice submission(s) due for "Timesheet: Weekly / Invoice: Monthly" client(s), check the "Summary" tab for sheets with a "Number of Invoices Due" count of greater than 0: (https://docs.google.com/spreadsheets/d/1lbfoQFRStxrhl1VD9cBHeoMdsrEFxYejZ9hrXfCyUck)';
    var subject = 'Invoice Submission Due for Weekly/Monthly Invoices';
    MailApp.sendEmail(emailAddress, subject, message);
    }
}