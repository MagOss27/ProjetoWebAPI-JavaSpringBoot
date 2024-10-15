package com.criandoapi.flowerexperience.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.criandoapi.flowerexperience.DAO.IPlanta;
import com.criandoapi.flowerexperience.model.Planta;

@Service
public class PlantaService {

    @Autowired
    private IPlanta dao;

    public Optional<Planta> buscarIDPlanta(Integer id) throws IllegalAccessException {
        Optional<Planta> plantaNovo = dao.findById(id);

        if (plantaNovo.isEmpty()) {
            throw new IllegalArgumentException("Planta não encontrada");
        }
        return plantaNovo;
    }

    public Planta editarPlanta(Integer id, Planta plantaAtualizada) throws IllegalArgumentException {
        if (!dao.existsById(id)) {
            throw new IllegalArgumentException("Planta não encontrada");
        }
        plantaAtualizada.setId(id);
        return dao.save(plantaAtualizada);
    }
}
