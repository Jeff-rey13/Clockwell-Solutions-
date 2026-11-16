// Clock in (outline).
//
// Every server action in Clockwell follows the same steps. The real function, with all checks,
// is in our private repository.
//
//  1. Check who is asking (signed-in staff of this company only).
//  2. Validate the input (shared schemas, same as the app).
//  3. Return the earlier result if this exact request was already received (safe retries).
//  4. Load the company's rules: office, sites, late leeway, GPS margin, blocking.
//  5. Decide place and status with the shared clock-in rules, using the server's time.
//  6. Save the record, write the audit log, alert the chosen admins if late.
//  7. Reply with a short result; never send internal details back.

export {};
