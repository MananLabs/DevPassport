export interface ScoreWeights {
  problemSolving: number;
  engineering: number;
  projects: number;
  openSource: number;
  collaboration: number;
  knowledgeSharing: number;
  learningVelocity: number;
  professional: number;
}

const DEFAULT_WEIGHTS: ScoreWeights = {
  problemSolving: 0.20,
  engineering: 0.18,
  projects: 0.15,
  openSource: 0.15,
  collaboration: 0.10,
  knowledgeSharing: 0.08,
  learningVelocity: 0.07,
  professional: 0.07,
};

export interface RawMetrics {
  leetcodeProblems?: number;
  codeforcesRating?: number;
  hackerrankScore?: number;
  githubStars?: number;
  githubContributions?: number;
  githubRepos?: number;
  openSourcePRs?: number;
  openSourceIssues?: number;
  blogPosts?: number;
  stackoverflowReputation?: number;
  kaggleRank?: number;
  projectCount?: number;
  projectStars?: number;
  certifications?: number;
  hackathonWins?: number;
}

function normalizeTo1000(value: number, max: number): number {
  return Math.min(1000, Math.round((value / max) * 1000));
}

export function calculateProblemSolvingScore(metrics: RawMetrics): number {
  let score = 0;
  let weight = 0;

  if (metrics.leetcodeProblems !== undefined) {
    score += normalizeTo1000(metrics.leetcodeProblems, 3000) * 0.35;
    weight += 0.35;
  }
  if (metrics.codeforcesRating !== undefined) {
    score += normalizeTo1000(Math.max(0, metrics.codeforcesRating - 800), 2200) * 0.35;
    weight += 0.35;
  }
  if (metrics.hackerrankScore !== undefined) {
    score += normalizeTo1000(metrics.hackerrankScore, 5000) * 0.30;
    weight += 0.30;
  }

  return weight > 0 ? Math.round(score / weight) : 0;
}

export function calculateEngineeringScore(metrics: RawMetrics): number {
  let score = 0;
  let weight = 0;

  if (metrics.githubRepos !== undefined) {
    score += normalizeTo1000(metrics.githubRepos, 200) * 0.30;
    weight += 0.30;
  }
  if (metrics.githubContributions !== undefined) {
    score += normalizeTo1000(metrics.githubContributions, 5000) * 0.40;
    weight += 0.40;
  }
  if (metrics.githubStars !== undefined) {
    score += normalizeTo1000(metrics.githubStars, 10000) * 0.30;
    weight += 0.30;
  }

  return weight > 0 ? Math.round(score / weight) : 0;
}

export function calculateOpenSourceScore(metrics: RawMetrics): number {
  let score = 0;
  let weight = 0;

  if (metrics.openSourcePRs !== undefined) {
    score += normalizeTo1000(metrics.openSourcePRs, 500) * 0.50;
    weight += 0.50;
  }
  if (metrics.openSourceIssues !== undefined) {
    score += normalizeTo1000(metrics.openSourceIssues, 300) * 0.30;
    weight += 0.30;
  }
  if (metrics.githubStars !== undefined) {
    score += normalizeTo1000(metrics.githubStars, 10000) * 0.20;
    weight += 0.20;
  }

  return weight > 0 ? Math.round(score / weight) : 0;
}

export function calculateProjectsScore(metrics: RawMetrics): number {
  let score = 0;
  let weight = 0;

  if (metrics.projectCount !== undefined) {
    score += normalizeTo1000(metrics.projectCount, 50) * 0.40;
    weight += 0.40;
  }
  if (metrics.projectStars !== undefined) {
    score += normalizeTo1000(metrics.projectStars, 10000) * 0.60;
    weight += 0.60;
  }

  return weight > 0 ? Math.round(score / weight) : 0;
}

export function calculateKnowledgeSharingScore(metrics: RawMetrics): number {
  let score = 0;
  let weight = 0;

  if (metrics.blogPosts !== undefined) {
    score += normalizeTo1000(metrics.blogPosts, 200) * 0.50;
    weight += 0.50;
  }
  if (metrics.stackoverflowReputation !== undefined) {
    score += normalizeTo1000(metrics.stackoverflowReputation, 100000) * 0.50;
    weight += 0.50;
  }

  return weight > 0 ? Math.round(score / weight) : 0;
}

export function calculateOverallScore(
  categoryScores: Record<string, number>,
  weights: ScoreWeights = DEFAULT_WEIGHTS
): number {
  const {
    problemSolving = 0,
    engineering = 0,
    projects = 0,
    openSource = 0,
    collaboration = 0,
    knowledgeSharing = 0,
    learningVelocity = 0,
    professional = 0,
  } = categoryScores;

  const weighted =
    problemSolving * weights.problemSolving +
    engineering * weights.engineering +
    projects * weights.projects +
    openSource * weights.openSource +
    collaboration * weights.collaboration +
    knowledgeSharing * weights.knowledgeSharing +
    learningVelocity * weights.learningVelocity +
    professional * weights.professional;

  return Math.round(weighted);
}

export function calculateTrustScore(params: {
  accountAgeDays: number;
  connectedPlatforms: number;
  emailVerified: boolean;
  githubVerified: boolean;
  activityConsistencyScore: number;
}): number {
  const { accountAgeDays, connectedPlatforms, emailVerified, githubVerified, activityConsistencyScore } = params;

  const ageScore = Math.min(25, Math.round((accountAgeDays / 365) * 25));
  const platformScore = Math.min(25, connectedPlatforms * 2.5);
  const verificationScore = (emailVerified ? 10 : 0) + (githubVerified ? 15 : 0);
  const activityScore = Math.round(activityConsistencyScore * 0.25);

  return Math.min(100, ageScore + platformScore + verificationScore + activityScore);
}

export function calculateDeveloperDNA(metrics: RawMetrics): Record<string, number> {
  const builder = Math.min(100, Math.round(
    ((metrics.projectCount || 0) * 2 + (metrics.githubRepos || 0)) / 3
  ));

  const problemSolver = Math.min(100, Math.round(
    ((metrics.leetcodeProblems || 0) / 30 + (metrics.codeforcesRating || 800) / 32) / 2
  ));

  const researcher = Math.min(100, Math.round(
    ((metrics.blogPosts || 0) * 1.5 + (metrics.kaggleRank || 0) / 100) / 2
  ));

  const openSourcer = Math.min(100, Math.round(
    ((metrics.openSourcePRs || 0) / 5 + (metrics.githubContributions || 0) / 50) / 2
  ));

  const educator = Math.min(100, Math.round(
    ((metrics.blogPosts || 0) * 2 + (metrics.stackoverflowReputation || 0) / 1000) / 2
  ));

  return {
    builder,
    problemSolver,
    researcher,
    openSourcer,
    educator,
    leader: Math.min(100, Math.round((builder + openSourcer) / 2)),
    entrepreneur: Math.min(100, Math.round(builder * 0.8 + researcher * 0.2)),
  };
}
