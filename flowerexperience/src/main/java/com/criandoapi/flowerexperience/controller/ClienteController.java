package com.criandoapi.flowerexperience.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.criandoapi.flowerexperience.DAO.ICliente;
import com.criandoapi.flowerexperience.model.Cliente;

@RestController
@CrossOrigin("*")
@RequestMapping("/clientes")
public class ClienteController {

    @Autowired
    private ICliente dao;

    @GetMapping
    public ResponseEntity<List<Cliente>> listaClientes() {
        List<Cliente> lista = (List<Cliente>) dao.findAll();
        return ResponseEntity.status(200).body(lista);
    }

    @PostMapping
    public  ResponseEntity<Cliente> criarCliente(@RequestBody Cliente cliente) {
        Cliente clienteNovo = dao.save(cliente);
        return ResponseEntity.status(201).body(clienteNovo);
    }

    @PutMapping
    public ResponseEntity<Cliente> editarCliente(@RequestBody Cliente cliente) {
        Cliente clienteNovo = dao.save(cliente);
        return ResponseEntity.status(201).body(clienteNovo);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> excluirCliente(@PathVariable Integer id) {
        dao.deleteById(id);
        return ResponseEntity.status(204).build();
    }
}
