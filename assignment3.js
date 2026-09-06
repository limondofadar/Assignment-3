// ==========================================
// Problem 1 — Student Introduction Generator
// ==========================================
function studentIntroduction(student) {
  // Input Validation: Check if student is an object, not null, not an array, and has required properties
  if (
    typeof student !== "object" ||
    student === null ||
    Array.isArray(student) ||
    !("name" in student) ||
    !("age" in student) ||
    !("course" in student)
  ) {
    return "Invalid";
  }

  // Template literal return
  return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`;
}

// ==========================================
// Problem 2 — Active User Filter
// ==========================================
function filterActiveUsers(users) {
  // Input Validation: Must be a non-empty array
  if (!Array.isArray(users) || users.length === 0) {
    return "Invalid";
  }

  // Check if every object in the array has the 'isActive' property
  for (const user of users) {
    if (typeof user !== "object" || user === null || !("isActive" in user)) {
      return "Invalid";
    }
  }

  // Filter and return active users
  return users.filter((user) => user.isActive === true);
}

// ==========================================
// Problem 3 — Trending Hashtag Counter
// ==========================================
function countHashtags(caption) {
  // Input Validation: Must be a string
  if (typeof caption !== "string") {
    return "Invalid";
  }

  const words = caption.split(" ");
  let count = 0;
  let longest = "";

  for (const word of words) {
    if (word.startsWith("#") && word.length > 1) {
      count++;
      const tagText = word.slice(1);
      if (tagText.length > longest.length) {
        longest = tagText;
      }
    }
  }

  return {
    hashtagCount: count,
    longestTag: longest,
  };
}

// ==========================================
// Problem 4 — Bonus Score Calculator
// ==========================================
function bonusScore(scores) {
  // Input Validation: Must be an array and non-empty
  if (!Array.isArray(scores) || scores.length === 0) {
    return "Invalid";
  }

  // Check if all elements are strictly numbers
  const allNumbers = scores.every((score) => typeof score === "number");
  if (!allNumbers) {
    return "Invalid";
  }

  // Add 10 bonus to each score and calculate total sum
  const updatedScores = scores.map((score) => score + 10);
  const totalScore = updatedScores.reduce((acc, curr) => acc + curr, 0);

  return totalScore;
}

// ==========================================
// Problem 5 — AI Leaderboard Generator
// ==========================================
function generateLeaderboard(students) {
  // Validation 1: Must be an array and non-empty
  if (!Array.isArray(students) || students.length === 0) {
    return "Invalid";
  }

  // Validation 2: Validate each student object structure
  for (const student of students) {
    if (
      typeof student !== "object" ||
      student === null ||
      !("name" in student) ||
      !("score" in student) ||
      typeof student.score !== "number"
    ) {
      return "Invalid";
    }
  }

  // Filter students with score >= 70
  const qualified = students.filter((student) => student.score >= 70);

  // Map qualified students' names to uppercase
  const names = qualified.map((student) => student.name.toUpperCase());

  // Return the top 3 (first 3) qualified students
  return names.slice(0, 3);
}