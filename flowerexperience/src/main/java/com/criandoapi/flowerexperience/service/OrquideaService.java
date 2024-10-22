package com.criandoapi.flowerexperience.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.criandoapi.flowerexperience.DAO.IOrquidea;
import com.criandoapi.flowerexperience.model.Orquidea;

@Service
public class OrquideaService {

    @Autowired
    private IOrquidea dao;

    public Optional<Orquidea> buscarIDOrquidea(Integer id) throws IllegalAccessException {
        Optional<Orquidea> orquideaAtualizado = dao.findById(id);

        if (orquideaAtualizado.isEmpty()) {
            throw new IllegalArgumentException("Orquidea não encontrada");
        }
        return orquideaAtualizado;
    }

    public Orquidea editarOrquidea(Integer id, Orquidea orquideaAtualizado) throws IllegalAccessException {
        if (!dao.existsById(id)) {
            throw new IllegalArgumentException("Orquidea não encontrada");
        }
        orquideaAtualizado.setId(id);
        return dao.save(orquideaAtualizado);
    }

}
