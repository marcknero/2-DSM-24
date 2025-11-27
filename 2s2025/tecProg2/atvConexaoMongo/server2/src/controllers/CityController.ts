import { Request, Response } from 'express';
import { State } from '../models';

class CityController {
    public async create(req: Request, res: Response): Promise<Response> {
        // Espera body: { idState, name }
        const { idState, name } = req.body;
        try {
            const state = await State.findById(idState);
            if (!state) return res.status(404).json({ message: 'estado não encontrado' });

            // checa duplicata local ao state
            if ((state.cities as any[]).some(c => c.name === name)) {
                return res.json({ message: 'cidade já cadastrada neste estado' });
            }

            (state.cities as any[]).push({ name });
            const resp = await state.save();
            const newCity = resp.cities[resp.cities.length - 1];
            return res.json(newCity);
        } catch (error: any) {
            if (error && error.errors && error.errors['name']) {
                return res.json({ message: error.errors['name'].message });
            }
            return res.json({ message: error.message });
        }
    }

    public async list(req: Request, res: Response): Promise<Response> {
        // Opcional query idState para listar apenas as cidades de um estado
        const { idState } = req.query;
        try {
            if (idState) {
                const state = await State.findById(String(idState));
                if (!state) return res.status(404).json({ message: 'estado não encontrado' });
                const cities = (state.cities as any[]).slice().sort((a, b) => a.name.localeCompare(b.name));
                return res.json(cities);
            } else {
                // lista todas as cidades (com referência ao estado)
                const states = await State.find();
                const cities = states.flatMap(s =>
                    (s.cities as any[]).map(c => ({ ...c.toObject ? c.toObject() : c, stateId: s._id }))
                );
                cities.sort((a, b) => a.name.localeCompare(b.name));
                return res.json(cities);
            }
        } catch (error: any) {
            return res.json({ message: error.message });
        }
    }
}

export default new CityController();