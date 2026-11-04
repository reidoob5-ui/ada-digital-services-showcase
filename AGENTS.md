<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

<!-- ============= PROJECT RULES ============= -->

- All brand data (services, plans, prices in Kz, WhatsApp contact) is defined once in `src/lib/site.ts`; pages read from it — never hardcode prices or the WhatsApp number elsewhere. Why: the flyer is the source of truth and prices must not drift between pages.
- Contact-form submissions are stored server-side in the `contact_submissions` table via `submitLead` in `src/lib/lead.functions.ts` before the WhatsApp conversation opens; never ship a path that skips the store step. Why: the owner loses leads if the form only opens WhatsApp.
- Canonical, og:url and the sitemap are built from `SITE_URL` in `src/lib/site.ts`; never hardcode the domain elsewhere. Why: when a custom domain is added, one edit updates the whole site.

