# TypeScript-Problem-Solving-Assignment

This assignment is solved with typed TypeScript functions that return values for each task. The implementation is also saved in [assignment.ts](assignment.ts).

```ts
export type Light = "red" | "yellow" | "green";

export interface Booking {
  name: string;
  guests: number;
  time: string;
}

export interface QuizSummary {
  total: number;
  average: number;
}

export function getBatteryStatus(percentage: number): string {
  if (percentage >= 0 && percentage <= 20) {
    return "Low";
  }

  if (percentage >= 21 && percentage <= 50) {
    return "Medium";
  }

  if (percentage >= 51 && percentage <= 90) {
    return "High";
  }

  return "Full";
}

export function formatBookingConfirmation(booking: Booking): string {
  return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}.`;
}

export function calculateWeeklyTotal(expenses: number[]): number {
  return expenses.reduce((total, expense) => total + expense, 0);
}

export function getTrafficAction(light: Light): string {
  switch (light) {
    case "red":
      return "Stop";
    case "yellow":
      return "Slow Down";
    case "green":
      return "Go";
    default:
      return "Stop";
  }
}

export function getQuizSummary(scores: number[]): QuizSummary {
  const total = scores.reduce((sum, score) => sum + score, 0);
  const average = scores.length === 0 ? 0 : total / scores.length;

  return { total, average };
}
```

Each function returns the required value and handles the edge cases listed in the assignment, including an empty expense array and an empty quiz score array.
