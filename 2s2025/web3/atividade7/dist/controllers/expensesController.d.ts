import { Request, Response } from "express";
export declare const createExpense: (req: Request, res: Response) => Promise<void>;
export declare const getExpenses: (req: Request, res: Response) => Promise<void>;
export declare const updateExpense: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteExpense: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getTotalExpenses: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=expensesController.d.ts.map