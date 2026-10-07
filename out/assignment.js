"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBatteryStatus = getBatteryStatus;
exports.formatBookingConfirmation = formatBookingConfirmation;
exports.calculateWeeklyTotal = calculateWeeklyTotal;
exports.getTrafficAction = getTrafficAction;
exports.getQuizSummary = getQuizSummary;
function getBatteryStatus(percentage) {
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
function formatBookingConfirmation(booking) {
    return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}.`;
}
function calculateWeeklyTotal(expenses) {
    return expenses.reduce((total, expense) => total + expense, 0);
}
function getTrafficAction(light) {
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
function getQuizSummary(scores) {
    const total = scores.reduce((sum, score) => sum + score, 0);
    const average = scores.length === 0 ? 0 : total / scores.length;
    return { total, average };
}
const batteryTests = [
    { input: 10, expected: "Low" },
    { input: 35, expected: "Medium" },
    { input: 75, expected: "High" },
    { input: 100, expected: "Full" },
];
for (const test of batteryTests) {
    const actual = getBatteryStatus(test.input);
    if (actual !== test.expected) {
        throw new Error(`Battery status failed for ${test.input}: expected ${test.expected}, got ${actual}`);
    }
}
const bookingTests = [
    { input: { name: "Aisha", guests: 4, time: "7:00 PM" }, expected: "Aisha's table for 4 guests is confirmed at 7:00 PM." },
    { input: { name: "Rahim", guests: 2, time: "8:30 PM" }, expected: "Rahim's table for 2 guests is confirmed at 8:30 PM." },
];
for (const test of bookingTests) {
    const actual = formatBookingConfirmation(test.input);
    if (actual !== test.expected) {
        throw new Error(`Booking message failed for ${test.input.name}: expected ${test.expected}, got ${actual}`);
    }
}
const weeklyTests = [
    { input: [200, 450, 100], expected: 750 },
    { input: [1000, 250], expected: 1250 },
    { input: [], expected: 0 },
];
for (const test of weeklyTests) {
    const actual = calculateWeeklyTotal(test.input);
    if (actual !== test.expected) {
        throw new Error(`Weekly total failed for ${JSON.stringify(test.input)}: expected ${test.expected}, got ${actual}`);
    }
}
const trafficTests = [
    { input: "red", expected: "Stop" },
    { input: "yellow", expected: "Slow Down" },
    { input: "green", expected: "Go" },
];
for (const test of trafficTests) {
    const actual = getTrafficAction(test.input);
    if (actual !== test.expected) {
        throw new Error(`Traffic action failed for ${test.input}: expected ${test.expected}, got ${actual}`);
    }
}
const quizTests = [
    { input: [8, 9, 7, 10], expected: { total: 34, average: 8.5 } },
    { input: [5, 5], expected: { total: 10, average: 5 } },
    { input: [], expected: { total: 0, average: 0 } },
];
for (const test of quizTests) {
    const actual = getQuizSummary(test.input);
    if (actual.total !== test.expected.total || actual.average !== test.expected.average) {
        throw new Error(`Quiz summary failed for ${JSON.stringify(test.input)}: expected ${JSON.stringify(test.expected)}, got ${JSON.stringify(actual)}`);
    }
}
