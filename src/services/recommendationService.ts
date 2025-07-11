interface RecommendationInput {
    age: number;
    income: number;
    dependents: number;
    risk: 'low' | 'medium' | 'high';
  }
  
  interface RecommendationOutput {
    plan: string;
    reason: string;
  }
  
  export function getRecommendation(input: RecommendationInput): RecommendationOutput {
    const { age, risk } = input;
  
    if (age < 40 && risk === 'high') {
      return {
        plan: 'Term Life – $500,000 for 20 years',
        reason: "You're under 40 with high risk tolerance. Term life offers good value.",
      };
    }
    if (age >= 40 && age <= 60 && risk !== 'low') {
      return {
        plan: 'Whole Life – $250,000',
        reason: "Balanced option suitable for mid-age with some risk tolerance.",
      };
    }
    return {
      plan: 'Final Expense Insurance – $50,000',
      reason: "Low risk or older age – final expense coverage is practical.",
    };
  }
  