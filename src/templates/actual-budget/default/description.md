Actual Budget is a local-first personal finance application focused on envelope budgeting. The
official server image stores encrypted account data under `/data`; this template keeps that
directory on a persistent volume and exposes the web application only through the HTTPS domain.
