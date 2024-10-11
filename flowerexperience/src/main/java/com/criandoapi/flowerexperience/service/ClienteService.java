package com.criandoapi.flowerexperience.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.criandoapi.flowerexperience.DAO.ICliente;
import com.criandoapi.flowerexperience.model.Cliente;

@Service
public class ClienteService {

    @Autowired
    private ICliente dao;

    public Optional<Cliente> buscarID(Integer id) throws IllegalArgumentException {
        Optional<Cliente> clienteNovo = dao.findById(id);

        if (clienteNovo.isEmpty()) {
            throw new IllegalArgumentException("Candidato não encontrado");
        }
        return clienteNovo;
    }

    public Cliente editarCliente(Integer id, Cliente clienteAtualizado) throws IllegalArgumentException {
        if (!dao.existsById(id)) {
            throw new IllegalArgumentException("Cliente não encontrado");
        }
        clienteAtualizado.setId(id); // Atualiza o ID para garantir que está correto
        return dao.save(clienteAtualizado); // Salva as alterações
    }

}
