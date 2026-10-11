export interface Mission {
  label: string;
  title: string;
  role: string;
  summary: string;
  highlights: string[];
  tags: string[];
  repoUrl: string;
}

const GITHUB = "https://github.com/King5ula";

// The mission projects from the Mission Ready Level 5 diploma, in course order.
export const MISSIONS: Mission[] = [
  {
    label: "Mission 01",
    title: "Turners Cars, AI Vehicle Recognition",
    role: "Solo prototype",
    summary:
      "A prototype that reads a customer's car photo and returns its body type and make, to speed up insurance quoting for Turners Cars.",
    highlights: [
      "Trained an AWS Rekognition Custom Labels model to recognise vehicle makes",
      "Paired it with Rekognition's general labels to detect body type, with a fallback when the custom model is unavailable",
      "Express API with in-memory Multer uploads, and a React UI showing the preview and confidence",
    ],
    tags: ["AWS Rekognition", "Node.js", "Express", "Multer", "React"],
    repoUrl: `${GITHUB}/Turners-Cars-AWS-Rekognition-ML`,
  },
  {
    label: "Mission 02",
    title: "Turners Insurance, Quote APIs with TDD",
    role: "Team (I owned API 2 and API 3)",
    summary:
      "REST APIs behind the insurance purchase flow, built test-first in a Scrum team with daily stand-ups and Jira.",
    highlights: [
      "Risk Rating API: scans a driver's claim history for keywords and returns a 1 to 5 rating",
      "Quote API: turns car value and risk rating into yearly and monthly premiums",
      "Written test-first with Jest and Supertest, including invalid-input cases",
    ],
    tags: ["Node.js", "Express", "Jest", "Supertest", "TDD"],
    repoUrl: `${GITHUB}/L5-mission-2`,
  },
  {
    label: "Mission 04",
    title: "Tina, Insurance Chatbot Consultant",
    role: "Solo, full stack",
    summary:
      "A conversational AI consultant that asks a customer about their vehicle and recommends the right Turners insurance policy.",
    highlights: [
      "Claude-powered conversation that adapts its questions to each reply instead of following a script",
      "Business rules for the three policies live in the system prompt, and tests check they stay there",
      "React frontend and Express backend, each in its own Docker container, run together with Docker Compose",
    ],
    tags: ["Anthropic Claude", "React", "Express", "Docker", "Jest"],
    repoUrl: `${GITHUB}/Turners-Insurance-Chatbot`,
  },
  {
    label: "Mission 05 · Phase 2",
    title: "Z Energy, Station Finder",
    role: "Team (I built Nearby Stations)",
    summary:
      "A revamp of the Z Energy website's station finder. I built the Nearby Stations feature from the database through to the map.",
    highlights: [
      "Mongoose station model covering services, fuel types and prices, with a geospatial index",
      "Google Maps view with custom pins and hover popups, ranking stations by distance and search radius",
      "Station cards with a fuel price comparison, plus a four-step mobile flow",
    ],
    tags: ["React", "Google Maps API", "MongoDB", "Mongoose", "Express"],
    repoUrl: `${GITHUB}/Z-energy-website-app-revamp-project`,
  },
];
