# R&M Sanitation — Build decisions log

Decisions taken during implementation that refine or resolve conflicts inside
"R&M Sanitation — Website Build Plan v1.0". The plan stays the authority; this file
records how its internal inconsistencies were resolved, and who decided.

| Date | Topic | Decision | Decided by |
|---|---|---|---|
| 2026-10-14 | Dispatcher copy | Plan §5 Contact + Ag FAQ say "Francisco or a Spanish-speaking dispatcher"; differentiator #1 says "no dispatcher". Site uses **Francisco only** ("You get Francisco — in English or Spanish"). | Luis |
| 2026-10-14 | BreadcrumbList | Plan §7 example points to `/services`, which is not in the sitemap. Breadcrumbs are **two levels: Home › Page**. No `/services` hub. | Luis |
| 2026-10-14 | NAP street format | Brief v1.1 §1 canonical NAP ("1625 Laurel Ave, Suite B") used everywhere, including schema (plan §7 example wrote "Avenue"). | Manifest: "NAP canónico del Brief v1.1 Sección 1" |
| 2026-10-14 | Hours | [TO CONFIRM]. Kept in `lib/site.ts` as an unconfirmed working assumption; **omitted** from schema and visible copy until Francisco confirms. | Global guardrail #5 |
| 2026-10-14 | Dark-shade surface | Plan §2 mentions #1a1a1a; brandboard token `--rm-ink-soft` #1f1f1f used instead (color comes from the brandboard). | Brandboard rule |
| 2026-10-14 | Photo source | Plan points to `04-Fotos/02-procesadas/`; the processed set actually lives in `04-Fotos/web-ready/` (with `image-alt-map.json` + `placement-map.md`). | Disk |
