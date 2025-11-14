"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTotalExpenses = exports.deleteExpense = exports.updateExpense = exports.getExpenses = exports.createExpense = void 0;
const expenses_1 = __importDefault(require("../models/expenses"));
//create expense
const createExpense = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newExpense = new expenses_1.default(req.body);
        const saveExpense = yield newExpense.save();
        res.status(201).json(saveExpense);
    }
    catch (error) {
        res.status(500).json({ message: 'erro ao salvar despesa', error });
    }
});
exports.createExpense = createExpense;
//expenses list
const getExpenses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const expenses = yield expenses_1.default.find();
        res.json(expenses);
    }
    catch (error) {
        res.status(500).json({ message: 'erro ao buscar despesa', error });
    }
});
exports.getExpenses = getExpenses;
//update expense
const updateExpense = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedExpense = yield expenses_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedExpense)
            return res.status(404).json({ error: 'despesa não encontrado' });
        res.json(updatedExpense);
    }
    catch (error) {
        res.status(400).json({ error: 'Erro ao atualizar despesa' });
    }
});
exports.updateExpense = updateExpense;
// delete Expense
const deleteExpense = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedProduct = yield expenses_1.default.findByIdAndDelete(req.params.id);
        if (!deletedProduct)
            return res.status(404).json({ error: 'Expense não encontrado' });
        res.json({ message: 'Expense deletado com sucesso' });
    }
    catch (error) {
        res.status(400).json({ error: 'Erro ao deletar Expense' });
    }
});
exports.deleteExpense = deleteExpense;
const getTotalExpenses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const total = yield expenses_1.default.aggregate([
            { $group: { _id: null, total: { $sum: '$amount' } } }
        ]);
        const totalAmount = (Array.isArray(total) && total.length > 0 && total[0].total != null)
            ? total[0].total
            : 0;
        return res.json({ total: totalAmount });
    }
    catch (error) {
        console.error('getTotalExpenses error:', error);
        return res.status(500).json({ error: 'Erro ao obter total de despesas' });
    }
});
exports.getTotalExpenses = getTotalExpenses;
//# sourceMappingURL=expensesController.js.map