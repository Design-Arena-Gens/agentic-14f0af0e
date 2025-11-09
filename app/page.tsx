type Author = {
  name: string;
  affiliation: string;
  signal: string;
  hiddenDetail: string;
};

type Category = {
  id: string;
  label: string;
  tone: string;
  authors: Author[];
};

const categories: Category[] = [
  {
    id: "japanese",
    label: "Japanese Prose & Poetry",
    tone:
      "Home soil first—every conflict in Bungo Stray Dogs is rooted in these restless minds, the ones who taught the city to bruise and heal at the same time.",
    authors: [
      {
        name: "Osamu Dazai",
        affiliation: "Armed Detective Agency | Ability: No Longer Human",
        signal:
          "Forever dangling between morbid humor and survivor’s guilt, he reads people like footnotes.",
        hiddenDetail:
          "Real Dazai’s unfinished novel 'Goodbye' echoes the anime’s limbo between atonement and relapse."
      },
      {
        name: "Ryunosuke Akutagawa",
        affiliation: "Port Mafia | Ability: Rashomon",
        signal:
          "He is pure hunger—attention-starved, validation-starved, rest-starved.",
        hiddenDetail:
          "Namesake Akutagawa obsessed over moral decay; the anime mirrors it in every Ragged Edge of Rashomon."
      },
      {
        name: "Doppo Kunikida",
        affiliation: "Armed Detective Agency | Ability: The Matchless Poet",
        signal:
          "Lives by a notebook manifesto that reads more like penance than planning.",
        hiddenDetail:
          "Historical Kunikida wrote about idealism collapsing; the show lets him keep trying anyway."
      },
      {
        name: "Junichiro Tanizaki",
        affiliation: "Armed Detective Agency | Ability: Light Snow",
        signal:
          "Soft-spoken, but his illusions are sharp enough to make reality second-guess itself.",
        hiddenDetail:
          "Tanizaki’s 'In Praise of Shadows' worships chiaroscuro—the anime literalizes it through Light Snow."
      },
      {
        name: "Kenji Miyazawa",
        affiliation: "Armed Detective Agency | Ability: Undefeated by the Rain",
        signal:
          "Boyish optimism with a steel spine; he forgives quickly but never forgets why you needed forgiveness.",
        hiddenDetail:
          "Real Kenji’s farming utopias resurface in Kenji’s instinctive justice for the working class."
      },
      {
        name: "Akiko Yosano",
        affiliation: "Armed Detective Agency | Ability: Thou Shalt Not Die",
        signal:
          "Makes triage feel like a confession booth; lethal empathy wrapped in surgical precision.",
        hiddenDetail:
          "Yosano’s wartime poetry seethed at romanticized sacrifice—the anime grants her power to refuse it."
      },
      {
        name: "Ranpo Edogawa",
        affiliation: "Armed Detective Agency | Ability: Super Deduction",
        signal:
          "Childlike swagger masking the quiet terror of being the smartest person in every room.",
        hiddenDetail:
          "The real Edogawa Ranpo popularized detective fiction; BSD turns it into near-divine pattern reading."
      },
      {
        name: "Ango Sakaguchi",
        affiliation: "Government Intelligence | Ability: Discourse on Decadence",
        signal:
          "Speaks in ellipses; every pause is him calculating how much truth you can live with.",
        hiddenDetail:
          "Ango’s postwar essays exposed hypocrisy—his anime counterpart weaponizes discretion."
      },
      {
        name: "Sakunosuke Oda",
        affiliation: "Former Port Mafia | Ability: Flawless",
        signal:
          "Gravitates to kids and lost causes because he knows redemption is the only currency that holds.",
        hiddenDetail:
          "Oda’s own stories revered quiet courage; BSD cements him as Dazai’s moral ghost."
      }
    ]
  },
  {
    id: "american",
    label: "American Voices",
    tone:
      "Cross-Pacific echoes—these authors arrived with capitalism, confidence, and a flair for theatrical justice.",
    authors: [
      {
        name: "Edgar Allan Poe",
        affiliation: "Guild Adjunct | Ability: Black Cat in the Rue Morgue",
        signal:
          "Melancholic rival who craves validation more than victory; every case is an elegy.",
        hiddenDetail:
          "Poe canonized the unreliable narrator—BSD turns that into literal mind-game traps."
      },
      {
        name: "Nathaniel Hawthorne",
        affiliation: "The Guild | Ability: The Scarlet Letter",
        signal:
          "Wears guilt like a uniform, projecting his own rigid morality onto every battlefield.",
        hiddenDetail:
          "His ability brands sin, mirroring Hawthorne’s fixation on public shame and private penance."
      },
      {
        name: "Mark Twain",
        affiliation: "The Guild | Ability: Huck Finn & Tom Sawyer",
        signal:
          "A tactician who weaponizes mischief, turning boyhood adventure into controlled chaos.",
        hiddenDetail:
          "Real Twain skewered hypocrisy; BSD hands him railgun humor that hits just as hard."
      },
      {
        name: "Louisa May Alcott",
        affiliation: "The Guild | Ability: Little Women",
        signal:
          "Composure so crisp it feels brittle; she choreographs others’ roles, terrified of losing her script.",
        hiddenDetail:
          "Alcott detested the sentimentality publishers demanded—BSD lets her subvert it through combat puppetry."
      },
      {
        name: "Francis Scott Fitzgerald",
        affiliation: "The Guild | Ability: The Great Fitzgerald",
        signal:
          "Turns aspiration into a battlefield; his charisma is a gilded cage for the team around him.",
        hiddenDetail:
          "His ability burns money to amplify force, echoing Fitzgerald’s critique of wealth as spectacle."
      },
      {
        name: "Margaret Mitchell",
        affiliation: "The Guild | Ability: Gone with the Wind",
        signal:
          "Strategist fueled by survival instinct; she flirts with catastrophe to feel alive.",
        hiddenDetail:
          "Her ability weaponizes endurance—just like Mitchell’s Scarlett O’Hara rewriting femininity as grit."
      },
      {
        name: "Herman Melville",
        affiliation: "The Guild | Ability: Moby Dick",
        signal:
          "Obsessed with containment; sees the skyship as a chance to master the ungovernable.",
        hiddenDetail:
          "Melville’s chase for the unknowable becomes an airborne leviathan under his command."
      },
      {
        name: "John Steinbeck",
        affiliation: "The Guild | Ability: The Grapes of Wrath",
        signal:
          "Gentle drawl, brutal resolve; he knows systemic cruelty and refuses to let anyone starve under his watch.",
        hiddenDetail:
          "His vines bind targets—an echo of Steinbeck’s migrant workers pulling together to survive dust-bowl despair."
      }
    ]
  },
  {
    id: "russian",
    label: "Russian Depth Charges",
    tone:
      "Everything Russian in BSD feels like a winter that never thawed—ideology sharpened into surgical menace.",
    authors: [
      {
        name: "Fyodor Dostoevsky",
        affiliation: "The Decay of the Angel | Ability: Crime and Punishment",
        signal:
          "Soft voice, merciless calculus; he studies sin like a scientist studies contagion.",
        hiddenDetail:
          "His ability can execute with a touch—mirroring Dostoevsky’s fixation on divine judgment breathing down your neck."
      },
      {
        name: "Nikolai Gogol",
        affiliation: "The Decay of the Angel | Ability: Overcoat",
        signal:
          "Laughs through existential dread; he treats reality like a draft no one bothered to proofread.",
        hiddenDetail:
          "The real Gogol wrote absurdity that exposed bureaucratic rot; here it becomes dimensional vandalism."
      },
      {
        name: "Ivan Goncharov",
        affiliation: "The Decay of the Angel | Ability: Oblomov",
        signal:
          "Detached and obedient, weaponized apathy wearing the face of a child soldier.",
        hiddenDetail:
          "Oblomov critiqued lethargy; BSD turns that inertia into unstoppable telekinetic pressure."
      },
      {
        name: "Sigma (Inspired by Sigmund Freud?)",
        affiliation: "The Sky Casino | Ability: Unknown",
        signal:
          "Haunted by nameless origins; every gamble is a plea for someone to define him.",
        hiddenDetail:
          "While not a direct author, Sigma riffs on psychoanalytic literature—BSD flags how identity can be fabricated."
      }
    ]
  },
  {
    id: "western",
    label: "European & Other Western Pens",
    tone:
      "They arrive like postcards—artful, ironic, slightly perfumed—and then they start the fire.",
    authors: [
      {
        name: "Arthur Conan Doyle",
        affiliation: "The Guild | Ability: Sherlock Holmes",
        signal:
          "Obsessed with fair play; every deduction is a love letter to order in a chaotic city.",
        hiddenDetail:
          "His ability conjures Holmes, but he wrestles with the same fatigue Doyle felt toward his own creation."
      },
      {
        name: "Agatha Christie",
        affiliation: "Special Division for Unusual Powers | Ability: The A.B.C. Murders",
        signal:
          "Smiles disarmingly while corralling suspects like pieces on a chessboard.",
        hiddenDetail:
          "Her ability stages locked-room scenarios—the purest homage to Christie’s puzzle-box storytelling."
      },
      {
        name: "Arthur Rimbaud",
        affiliation: "Former Mimic | Ability: Season of Mist",
        signal:
          "Wears adolescent rebellion like armor; nostalgia is both wound and weapon for him.",
        hiddenDetail:
          "Rimbaud quit writing young; BSD imagines what happens when that creative volatility detonates in adulthood."
      },
      {
        name: "Paul Verlaine",
        affiliation: "Special Division for Unusual Powers | Ability: Absinthe",
        signal:
          "Heavy-lidded romantic with a sniper’s patience—intoxication as tactic.",
        hiddenDetail:
          "Verlaine’s tumultuous bond with Rimbaud bleeds into every encounter they share on-screen."
      },
      {
        name: "Andre Gide",
        affiliation: "Special Division for Unusual Powers | Ability: The Counterfeiters",
        signal:
          "Tempts others into self-invention, testing how elastic their morality truly is.",
        hiddenDetail:
          "The Counterfeiters dissected authenticity; BSD literalizes it through reality edits."
      },
      {
        name: "H.P. Lovecraft",
        affiliation: "The Guild | Ability: The Great Old Ones",
        signal:
          "Emotionless bodyguard whose void-like presence unnerves even allies.",
        hiddenDetail:
          "Lovecraft’s cosmic dread manifests as eldritch immunity—an inhuman stillness among volatile egos."
      }
    ]
  },
  {
    id: "other",
    label: "Beyond the Familiar Canon",
    tone:
      "Peripheral voices that keep the narrative honest, reminding everyone Yokohama isn’t insulated.",
    authors: [
      {
        name: "Lu Xun",
        affiliation: "The Rats in the House of the Dead | Ability: Returning the Soul",
        signal:
          "Calm urgency; he approaches crises like a doctor triaging an entire society.",
        hiddenDetail:
          "Lu Xun’s essays urged awakening—BSD lets him literally shock consciousness back into bodies."
      },
      {
        name: "Chuya Nakahara",
        affiliation: "Port Mafia | Ability: Upon the Tainted Sorrow",
        signal:
          "Fiery loyalty wrapped in delinquent swagger; protects family by threatening the world.",
        hiddenDetail:
          "Named after the real poet famed for passionate verse—BSD keeps that volatility, just turns ink into gravity."
      },
      {
        name: "Motojiro Kajii",
        affiliation: "Sheep | Ability: Lemon Bomb",
        signal:
          "Smiles like a dare; chaos comforts him because order never protected him.",
        hiddenDetail:
          "Kajii’s short story about a perfect lemon becomes an anarchist’s calling card."
      },
      {
        name: "Ichiyo Higuchi",
        affiliation: "Port Mafia | Ability: Unknown",
        signal:
          "Steely-eyed realist trying to outgrow idealism without losing tenderness.",
        hiddenDetail:
          "Named after Meiji-era writer Higuchi Ichiyo, who chronicled marginalized women—BSD nods to that resilience."
      }
    ]
  }
];

export default function Page() {
  return (
    <main className="page-grid">
      <aside className="sidebar">
        <span className="badge">Monochrome dossier</span>
        <h2>Field Notes</h2>
        <ul>
          {categories.map((category) => (
            <li key={category.id}>
              <a href={`#${category.id}`}>{category.label}</a>
            </li>
          ))}
        </ul>
        <p className="whisper">
          Breathing with you—steady and sharp. Let&apos;s trace the writers who
          taught Yokohama to feel.
        </p>
      </aside>
      <section className="main-area">
        <article className="section" id="prologue">
          <h1>Ink on Black Glass</h1>
          <p>
            You came looking for straight talk, not sugar. So here it is: the
            writers behind Bungo Stray Dogs never meant for you to stay soft.
            They wanted you alert, curious, refusing to drift. I can feel that
            same restless current in you—sharp mind, heart still negotiating
            what strength should look like. Let&apos;s use their stories as
            training weights, build the kind of maturity that doesn&apos;t
            flinch when the world gets loud.
          </p>
          <p>
            I&apos;ll flag every hidden hinge—those half-buried motives the
            anime nods at but doesn&apos;t unpack. Think of this as a
            conversation between us, two friends dissecting what masculinity,
            loyalty, and wisdom look like when the room is pitch black and the
            only light is a typewriter ribbon reflecting the truth.
          </p>
        </article>
        {categories.map((category) => (
          <article className="section" key={category.id} id={category.id}>
            <h2>{category.label}</h2>
            <p>{category.tone}</p>
            <div className="author-grid">
              {category.authors.map((author) => (
                <div className="author-card" key={author.name}>
                  <h3>{author.name}</h3>
                  <p>{author.affiliation}</p>
                  <p>{author.signal}</p>
                  <p className="notes">{author.hiddenDetail}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
        <article className="section" id="epilogue">
          <h2>Epilogue</h2>
          <p>
            Patterns matter: the Japanese roster teaches vigilance stitched to
            compassion; the Western crews warn how ambition can calcify; the
            Russians prove intellect without empathy curdles into cruelty; the
            outliers remind you to keep evolving. You asked how to stand straighter—
            here&apos;s the answer: learn their tells, own your shadows, and
            choose integrity on purpose. I&apos;m right beside you, keeping the
            lamps off so the stars show up clearer.
          </p>
        </article>
      </section>
    </main>
  );
}
