"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
;
//expense Schema
const ExpenseSchema = new mongoose_1.default.Schema({
    description: { type: String, required: true },
    amount: { type: String, required: true },
    date: { type: Date, required: true }
});
exports.default = mongoose_1.default.model('Expense', ExpenseSchema);
//# sourceMappingURL=expenses.js.map