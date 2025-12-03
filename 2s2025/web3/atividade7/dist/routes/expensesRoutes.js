"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const expensesController_1 = require("../controllers/expensesController");
const router = (0, express_1.Router)();
router.post('/', expensesController_1.createExpense);
router.get('/', expensesController_1.getExpenses);
router.put('/:id', expensesController_1.updateExpense);
router.delete(':id', expensesController_1.deleteExpense);
router.get('/total', expensesController_1.getTotalExpenses);
exports.default = router;
//# sourceMappingURL=expensesRoutes.js.map