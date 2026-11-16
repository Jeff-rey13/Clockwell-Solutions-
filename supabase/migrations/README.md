# Data model (overview)

Clockwell stores each company's data in Postgres with **row-level security on every table**: staff
see their own records, HR sees their company, and no company can ever see another's. The SQL is in
our private repository; this is the shape of it.

| Area | Main records |
|---|---|
| Companies | company, settings (retention, clock-in rules), plan and seat limit |
| People and places | staff profiles, offices, sites with boundaries, personal rule overrides |
| Attendance | clock-ins and clock-outs (server time, place, selfie), corrections kept separately |
| Leave and claims | leave types, balances, requests, medical claims with receipts |
| HR records | staff documents (HR only), staff card photos |
| Alerts | per-admin alerts, phone notification subscriptions |
| Operations | audit log, feature switches, releases, maintenance windows |

Files (selfies, receipts, documents) live in private storage and are opened only through links that
expire within minutes.
