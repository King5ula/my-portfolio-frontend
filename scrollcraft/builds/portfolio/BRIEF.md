# BRIEF: David Tuisaula portfolio

Interviewed 2026-10-16. Answers below are verbatim where David supplied them.
Topics 6, 7 and 9 were explicitly delegated ("I want the best", "You decide
what fits my portfolio the most", "let me see what you come up with"), so those
are marked **Authored under explicit creative delegation**.

## The eight topics

1. **Vibe.** "Resilience, Work Smarter, Intuitive, Dedicated". No references given.
2. **Journey.** "Have learnt and grown a lot upon completing my diploma and
   completed an internship and delivered a working MVP where I took lead of
   developing the technical side of the product which currently live. I
   engineered the system, the data pipeline and the agentic orchestration.
   Get hit with the top of the page, go to my missions, then down to my current
   project, down to my stack and then contact me details."
   Clarified: "current project" = the Pacific Generators field service system
   (the DBMS, in progress, not on GitHub). The internship MVP is the proof at
   the top of the page.
3. **Energy.** "It should feel intense at the start of the page, calm around my
   missions with a bit of intense and then calm again with my current project
   and intense with my stack and calm with details part of page."
4. **Feeling.** "I want them to feel impressed and pulled in to learn more about
   me, like my page is jumping out at them." No single moment named; the peak
   below is authored.
5. **Unique thing.** "when the user runs the mouse over the screen it creates
   like a wave under the cursor, like an earthquake affect"
6. **Range.** "I want the best." **Authored:** bold typographic poster. Blunt,
   structural, high scale contrast, off-black and bone with one hi-vis orange.
   The current indigo accent is dropped (it is the AI-purple default).
7. **World vs scenes.** **Authored:** distinct scenes, hard cuts. A continuous
   world needs geography and footage this page does not have.
8. **Assets.** **Authored (no photos, no generation key):** build from what is
   real. Type is the imagery. Real media: `techWorkFlow.mp4` (a 62s portrait
   phone recording of the technician app, from the earlier MySQL version) and
   `dashboard.png` (the admin dashboard, client logo visible, naming approved).

## Step 1

- **What and for whom.** A junior full stack developer's portfolio, for
  recruiters and hiring managers.
- **Believe by the end.** "That I am capable and I know what I'm doing."
- **Next action.** One label everywhere: **Get in touch**.
- **Art direction.** Typographic poster, no photographic ground.

## Facts (all checked against source, nothing invented)

Internship MVP, from the local repos (Aug 23 to Oct 9 2026). **Do not name the
product, company or methodology publicly.**
- An agentic strategy platform for small-business founders.
- David led the technical build: system design, data pipeline, agent
  orchestration. FastAPI + Pydantic backend, Next.js frontend, Supabase, Claude
  via forced tool use, a swappable OpenAI-compatible runner, MCP client,
  Voyage embeddings for corpus grounding, live multi-person workshop mode over
  WebSocket, CI on every push.
- Real numbers, counted 2026-10-17 from fresh clones of the GitHub repos
  (Seen-Ventures/PurpOS-MR-Backend and PurpOS-MR-Frontend, main, all commits
  David's): **28** distinct agents (structured model calls in `app/agents`:
  Identify 10, Align 8, Define 6, Measure 2, Insights 1, Purpose assessment 1;
  the 2 workshop synthesis helpers are not counted), 141 API endpoints across
  19 FastAPI routers (not shown), **260** automated
  tests (246 backend + 14 frontend), **7** weeks from first commit (Aug 23) to
  the latest delivery (Oct 9). The backend README still says 220 tests; the
  suite has grown since.

Pacific Generators system (current project, named with approval):
- Internal system for customers, sites, generators, service jobs, and parts
  and stock. Rebuilding from the MySQL version onto Django 6 + Django Ninja,
  Supabase Postgres, and Next.js 16 with Supabase Auth. Spreadsheet importer
  with dry-run reports moves the office's existing sheets across.
- Not public, no repo link.

Diploma finished 2026-10-09, results pending. Missions data stays in
`lib/missions.ts`, stack in `lib/tech-stack.ts`.

## Journey

```
1  Impact        a name at a size that hits, and proof of a live product
2  Respect       four real briefs, set like a record, quietly
3  Trust         the thing he is building right now, for a named client
4  Awe           every tool he has used, filling the screen as a wall
5  Resolve       the smallest type on the page, and a way to reach him
```

## Feeling curve

```
1  Jolt        DAVID TUISAULA at full viewport width; the letters quake the
               moment the pointer moves; one line names the live product he led
2  Respect     each mission title wipes in at large size, then plain labels
               and facts; calm, with the wipe as the one intense beat
3  Trust       a held, quiet section on a raised ground: a phone recording of
               the real technician app beside plain prose naming the client
4  Awe (PEAK)  a near-empty screen with one small line, then the stack lands
               row by row, each row stretched edge to edge, until the whole
               screen is a wall of tools that shakes under the cursor
5  Resolve     the page inverts to bone; the smallest type on the site; a form
               and one underlined line: Get in touch
```

No two adjacent acts share a feeling.

## The peak

> "his whole tech stack slammed onto the screen as a wall of giant words, and
> when I moved my mouse the wall shook like an earthquake."

Lives in act 4 (stack). It gets the largest span on the page and the quiet act
before it (act 3).

## Tell-someone sentence

It's the site where **the giant letters ripple and shake out from your cursor
like an earthquake, and his whole stack lands as a wall you can shake.**

## Grammar: typographic poster

Type is the imagery. Chosen because there is no photography and no generation
key, the honest asset is a set of claims and real numbers, and "jumping out at
them" is a job for scale contrast. Why the other seven lost:

- Filmic one-shot: needs footage for a scrub hero; carries the burden of proof.
- Chaptered editorial: reads calm throughout; the brief wants intensity at
  the top and at the stack.
- Live surface: the honest surface is the internship product, which cannot be
  named or shown.
- Continuous world: no geography, and no footage to fly through.
- Gallery: the argument is "capable", not "here are the options".
- Split stage: no two-sided argument.
- Rhythmic cutlist: bans pin, and the brief alternates calm and intense.

Nav is set small and scrolls away with the hero (no persistent bar). Hero is
the name at extreme scale. Close inverts the ground and drops to the quietest
type on the page.

## Signature move

**Seismic type.** Moving the mouse sends rings out from the pointer; every
display glyph a ring passes lifts and leans slightly away from the epicentre,
then settles. Faster sweeps make bigger waves, within a gentle cap. Softened
2026-10-17 at David's request ("less shakey"): the tremor jitter and the
up-and-down oscillation were removed, so it rolls rather than shakes. A tap does the same
on touch. Off under reduced motion. `components/Quake.tsx`.

## Score

| Beat | Act | Device | Span | Why this one |
|---|---|---|---|---|
| Impact | Hero | `pin` + `kinetic` + `count` | 2.3 | The name holds as ground while the proof crosses beneath it |
| Respect | Missions | `reveal` per row (flow acts) | flow | A wipe is the one intense beat in a calm read |
| Trust | Now building | `flow` + `in` | flow | Plain document pacing; the quiet before the peak |
| Awe (peak) | Stack | `pin` + `--sc-p` row landing | 3.4 | Largest span; silence then the wall |
| Resolve | Contact | `flow` + `in`, inverted ground | flow | Arrives and holds; nothing fades |

Five acts, ~10.7 viewport-heights desktop. Families: pin, kinetic, count,
reveal, flow. No family twice in a row.

## Feel check (2026-10-17, cold scroll before rereading the curve)

```
Felt                       Intended
1  Bold                    Jolt
2  Steady                  Respect
3  Quiet                   Trust
4  Awe                     Awe (peak)
5  Settled                 Resolve
```

The difference is act 1: before the pointer moves, the hero is bold rather than
jolting, because the jolt lives in the quake. On touch it arrives with the
first tap. Left as is: adding entrance motion to the name would be decorative
motion, which this grammar bans. The peak reads as the peak on the sheets (the
largest visual change and the most scroll room), the act before it is quiet,
and the last screen holds the form, links and small print.

## Authored silence

Act 4 opens on a near-empty pinned screen with one small line ("Here is what I
build with.") for roughly the first 15% of its travel. That is intended: the
silence before the wall. It is not dead scroll.
