Actual Budget is a local-first personal finance application focused on envelope budgeting. The
official server image stores encrypted account data under `/data`; this template keeps that
directory on a persistent volume. Actual Budget requires a secure HTTPS domain; the generated
HTTP URL is not supported because browsers disable `SharedArrayBuffer` there.
