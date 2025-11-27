import { Request, Response } from 'express';
import { State } from '../models';

class DistrictController {
    public async create(req: Request, res: Response): Promise<Response> {
        // Espera body: { idState, idCity, name }
        const { idState, idCity, name } = req.body;
        try {
            const state = await State.findById(idState);
            if (!state) return res.status(404).json({ message: 'estado não encontrado' });

            const city = (state.cities as any).id(idCity);
            if (!city) return res.status(404).json({ message: 'cidade não encontrada' });

            if ((city.districts as any[]).some((d: any) => d.name === name)) {
                return res.json({ message: 'distrito já cadastrado nesta cidade' });
            }

            (city.districts as any[]).push({ name });
            const resp = await state.save();
            const updatedCity = (resp.cities as any).id(idCity);
            const newDistrict = updatedCity.districts[updatedCity.districts.length - 1];
            return res.json(newDistrict);
        } catch (error: any) {
            if (error && error.errors) {
                const errorMessages = Object.values(error.errors).map((err: any) => err.message);
                return res.json({ message: errorMessages.join(', ') });
            }
            return res.json({ message: error.message });
        }
    }

    public async list(req: Request, res: Response): Promise<Response> {
        // Query opcional: idState ou idCity
        const { idState, idCity } = req.query;
        try {
            if (idCity && idState) {
                const state = await State.findById(String(idState));
                if (!state) return res.status(404).json({ message: 'estado não encontrado' });
                const city = (state.cities as any).id(String(idCity));
                if (!city) return res.status(404).json({ message: 'cidade não encontrada' });
                return res.json((city.districts as any[]).slice().sort((a, b) => a.name.localeCompare(b.name)));
            } else if (idState) {
                const state = await State.findById(String(idState));
                if (!state) return res.status(404).json({ message: 'estado não encontrado' });
                // retorna todos os distritos do estado (de todas as cidades)
                const districts = (state.cities as any[]).flatMap(c =>
                    (c.districts as any[]).map(d => ({ ...d.toObject ? d.toObject() : d, cityId: c._id }))
                );
                districts.sort((a, b) => a.name.localeCompare(b.name));
                return res.json(districts);
            } else {
                // retorna todos os distritos de todos os estados
                const states = await State.find();
                const districts = states.flatMap(s =>
                    (s.cities as any[]).flatMap(c =>
                        (c.districts as any[]).map(d => ({ ...d.toObject ? d.toObject() : d, cityId: c._id, stateId: s._id }))
                    )
                );
                districts.sort((a, b) => a.name.localeCompare(b.name));
                return res.json(districts);
            }
        } catch (error: any) {
            return res.json({ message: error.message });
        }
    }
}

export default new DistrictController();
