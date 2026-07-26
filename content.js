/* ============================================================
   এই ফাইলে শুধু তোমার লেখা/কনটেন্ট থাকবে।
   HTML বা CSS-এ কিছু বোঝার দরকার নেই — শুধু নিচের অংশগুলো বদলাও।

   নতুন SECTION/TOPIC যোগ করতে চাইলে:
   → নিচে "topics" array-তে { ... } একটা নতুন ব্লক কপি-পেস্ট করে বসাও।
   → এটুকু করলেই ওপরের ফিল্টার বাটন, নতুন সেকশন — সব automatic বানবে।

   নতুন ESSAY/লেখা যোগ করতে চাইলে:
   → যে topic-এর ভেতরে essay যোগ করবে, তার "essays" array-তে
     একটা নতুন { ... } ব্লক বসাও।
   ============================================================ */

const SITE = {

  // ---------- উপরের হিরো সেকশন ----------
  name: "Your Name Here",
  eyebrow: "A notebook of essays & running thoughts",
  tagline_html: `I write to think out loud — about <em>philosophy</em>, <em>psychology</em>,
      and the smaller things that don't fit either category. This is a running
      index of that writing, updated whenever a thought finishes forming.`,

  // ---------- সব টপিক/সেকশন এখানে ----------
  // রং (color) হেক্স কোড হিসেবে যেকোনো মিউটেড শেড দিতে পারো, যেমন:
  // "#46586b" (স্লেট নীল), "#8c5468" (গোলাপি-বাদামি), "#5c6e45" (সবুজাভ)
  // "#9c7a3c" (হলুদাভ বাদামি), "#5f6b7a" (গ্রে-নীল), "#7a5c6b" (মভ)

  topics: [
    {
      id: "philosophy",
      label: "Philosophy",
      color: "#46586b",
      note: "On freedom, identity, and the questions that don't resolve so much as deepen.",
      essays: [
        {
          date: "2026 MAR",
          title: "On the Weight of Choosing",
          excerpt: "Freedom is usually described as relief. Most days it feels more like gravity.",
          quote: "Freedom without responsibility is just an open door with no room behind it.",
          body: [
            "Replace this paragraph with your own essay. This placeholder exists so you can see how the layout, drop-cap, and spacing behave with real prose — swap it out entirely once you paste in your writing.",
            "We tend to imagine freedom as the absence of walls. But stand in an open field long enough and you'll notice the discomfort isn't the walls you're missing — it's the direction you now have to supply yourself.",
            "This is the part existentialist writers kept returning to: that responsibility isn't a tax on freedom, it's the shape freedom takes once you actually have it."
          ]
        },
        {
          date: "2026 JAN",
          title: "The Ship That Isn't There Yet",
          excerpt: "If every plank has been replaced, is it still the same ship — or is that even the right question?",
          quote: "Identity isn't the planks. It's the pattern that keeps replacing them.",
          body: [
            "Replace this paragraph with your own essay text.",
            "The Ship of Theseus puzzle is usually treated as a trick about materials. But the more interesting version of the question is personal: what made you 'you' was never a fixed cargo being carried across time — it was a pattern that kept re-describing itself using different material."
          ]
        }
      ]
    },

    {
      id: "psychology",
      label: "Psychology",
      color: "#8c5468",
      note: "On the stories we tell ourselves, and the quieter mechanics behind them.",
      essays: [
        {
          date: "2026 FEB",
          title: "The Stories We Rehearse",
          excerpt: "Most self-talk isn't reflection. It's a rerun we've stopped noticing.",
          quote: "A thought you've had fifty times isn't thinking. It's just familiar.",
          body: [
            "Replace this paragraph with your own essay text.",
            "There's a difference between thinking something through and simply replaying it. The first time you rehearse an argument in your head, it's genuine problem-solving. The fiftieth time, it isn't insight anymore — it's a groove the mind falls into because the groove already exists."
          ]
        },
        {
          date: "2025 NOV",
          title: "What the Mirror Doesn't Ask",
          excerpt: "We check mirrors for how we look. We rarely check who's watching.",
          quote: "The mirror only answers the question you actually asked it.",
          body: [
            "Replace this paragraph with your own essay text.",
            "Social comparison rarely announces itself as comparison. It shows up disguised as a preference, a mood, a sudden urge to redo something that was fine five minutes ago."
          ]
        }
      ]
    },

    {
      id: "other",
      label: "Other",
      color: "#5c6e45",
      note: "Everything that didn't fit a category, but wanted writing down anyway.",
      essays: [
        {
          date: "2026 APR",
          title: "Notes on Slowness",
          excerpt: "Not everything that takes longer is behind.",
          quote: "Slowness is sometimes just refusal in disguise.",
          body: [
            "Replace this paragraph with your own essay text.",
            "Speed is only a virtue when the destination was correct to begin with. A lot of what looks like slowness is actually just refusal — refusal to move fast in a direction that hasn't been chosen yet."
          ]
        },
        {
          date: "2025 AUG",
          title: "A Small Defense of Boredom",
          excerpt: "Boredom isn't empty time. It's time before it's been assigned a job.",
          quote: "Boredom used to be the waiting room where ideas assembled.",
          body: [
            "Replace this paragraph with your own essay text.",
            "We've come to treat boredom as a malfunction to be patched immediately, usually with a phone. But boredom used to be the waiting room where ideas assembled themselves."
          ]
        }
      ]
    }

    // ---------- এখানে নতুন TOPIC যোগ করতে চাইলে এভাবে কমা দিয়ে যোগ করো ----------
    // {
    //   id: "writing",
    //   label: "Writing",
    //   color: "#9c7a3c",
    //   note: "Notes about the craft itself.",
    //   essays: [
    //     {
    //       date: "2026 JUL",
    //       title: "তোমার নতুন লেখার শিরোনাম",
    //       excerpt: "এক লাইনের সংক্ষিপ্ত বর্ণনা",
    //       quote: "মার্জিনে যে ছোট quote টা দেখাবে",
    //       body: [
    //         "প্রথম প্যারাগ্রাফ।",
    //         "দ্বিতীয় প্যারাগ্রাফ।"
    //       ]
    //     }
    //   ]
    // }

  ],

  // ---------- ফুটার/এবাউট সেকশন ----------
  about: "Replace this paragraph with a few lines about yourself — who you are, what draws you to these subjects, and what you'd like a reader to take from spending time here.",
  contact: {
    email: "you@example.com",
    twitter: "#",
    linkedin: "#"
  }
};
