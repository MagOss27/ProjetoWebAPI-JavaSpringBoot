package com.criandoapi.flowerexperience.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.criandoapi.flowerexperience.DAO.IArranjo;
import com.criandoapi.flowerexperience.model.Arranjo;

@Service
public class ArranjoService {

    @Autowired
    private IArranjo dao;

    public Optional<Arranjo> buscarIDArranjo(Integer id) throws IllegalAccessException {
        Optional<Arranjo> arranjoNovo = dao.findById(id);

        if (arranjoNovo.isEmpty()) {
            throw new IllegalArgumentException("Arranjo não encontrado");
        }
        return arranjoNovo;
    }

    public Arranjo editarArranjo(Integer id, Arranjo arranjoAtualizado) throws IllegalAccessException {
        if (!dao.existsById(id)) {
            throw new IllegalArgumentException("Arranjo não encontrado");
        }
        arranjoAtualizado.setId(id);
        return dao.save(arranjoAtualizado);
    }
}
