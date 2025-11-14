"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const expensesRoutes_1 = __importDefault(require("./routes/expensesRoutes"));
const db_1 = __importDefault(require("./controllers/db"));
const app = (0, express_1.default)();
const PORT = 3000;
//middlewares
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.static('views'));
app.use(express_1.default.json());
//db connection
(0, db_1.default)();
//routes
app.use('/expenses', expensesRoutes_1.default);
//start aplication server
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map