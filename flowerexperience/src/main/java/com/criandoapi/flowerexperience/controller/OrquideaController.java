package com.criandoapi.flowerexperience.controller;

import java.util.Optional;
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

import com.criandoapi.flowerexperience.DAO.IOrquidea;
import com.criandoapi.flowerexperience.model.Orquidea;
import com.criandoapi.flowerexperience.service.OrquideaService;

@RestController
@CrossOrigin("*")
@RequestMapping("/orquideas")
public class OrquideaController { // Nome corrigido para refletir o papel de controlador

    @Autowired
    private IOrquidea dao;

    @Autowired
    private OrquideaService service; // Mantido apenas a injeção de OrquideaService para evitar loop

    @GetMapping
    public ResponseEntity<List<Orquidea>> listaOrquidea() {
        List<Orquidea> listaOrquidea = (List<Orquidea>) dao.findAll();
        return ResponseEntity.status(200).body(listaOrquidea);
    }

    @PostMapping
    public ResponseEntity<Orquidea> criarOrquidea(@RequestBody Orquidea orquidea) {
        Orquidea orquideaNova = dao.save(orquidea);
        return ResponseEntity.status(201).body(orquideaNova);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Orquidea> editarOrquidea(@PathVariable Integer id, @RequestBody Orquidea orquidea)
            throws IllegalAccessException {
        Orquidea orquideaNova = service.editarOrquidea(id, orquidea);
        return ResponseEntity.status(200).body(orquideaNova);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> excluirOrquidea(@PathVariable Integer id) {
        dao.deleteById(id);
        return ResponseEntity.status(204).build(); // Retorna 204 No Content após exclusão
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> buscarIDOrquidea(@PathVariable Integer id) throws IllegalAccessException {
        Optional<Orquidea> orquidea = service.buscarIDOrquidea(id);
        if (orquidea.isPresent()) {
            return ResponseEntity.ok(orquidea.get());
        } else {
            return ResponseEntity.status(404).body("Orquidea não encontrada");
        }
    }
}
