package com.criandoapi.flowerexperience.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.criandoapi.flowerexperience.DAO.IDesidratada;
import com.criandoapi.flowerexperience.model.Desidratada;

@Service
public class DesidratadaService {

    @Autowired
    private IDesidratada dao;

    public Optional<Desidratada> buscarIDDesidratada(Integer id) throws IllegalAccessException{
       Optional<Desidratada> desidratadaNovo = dao.findById(id);

       if(desidratadaNovo.isEmpty()){
        throw new IllegalArgumentException("Desidratada não encontrada");
       }
       return desidratadaNovo;
    }

    public Desidratada editarDesidratada(Integer id, Desidratada desidratadaAtualizada) throws IllegalAccessException{
        if(!dao.existsById(id)){
            throw new IllegalArgumentException("Desidratada não encontrada");
        }
        desidratadaAtualizada.setId(id);
        return dao.save(desidratadaAtualizada);
    }
}
