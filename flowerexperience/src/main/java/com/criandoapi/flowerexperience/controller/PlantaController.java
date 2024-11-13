package com.criandoapi.flowerexperience.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.criandoapi.flowerexperience.DAO.IPlanta;
import com.criandoapi.flowerexperience.model.Planta;
import com.criandoapi.flowerexperience.service.PlantaService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin("*")
@RequestMapping("/plantas")
public class PlantaController {

    @Autowired
    private IPlanta dao;

    @Autowired
    private PlantaService service;

    @GetMapping
    public ResponseEntity<List<Planta>> listaPlanta() {
        List<Planta> listaPlanta = (List<Planta>) dao.findAll();
        return ResponseEntity.status(200).body(listaPlanta);
    }

    @PostMapping
    public ResponseEntity<Planta> criarPlanta(@RequestBody Planta planta) {
        Planta plantaNovo  = dao.save(planta);
        return ResponseEntity.status(201).body(plantaNovo);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Planta> editarPlanta(@PathVariable Integer id, @RequestBody Planta planta) {
        Planta plantaNovo = service.editarPlanta(id, planta);
        return ResponseEntity.status(200).body(plantaNovo);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> excluirPlanta(@PathVariable Integer id) {
        dao.deleteById(id);
        return ResponseEntity.status(204).build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> buscarIDPlanta(@PathVariable Integer id) throws IllegalAccessException {
        Optional<Planta> planta = service.buscarIDPlanta(id);
        if (planta.isPresent()) {
            return ResponseEntity.ok(planta.get());
        } else {
            return ResponseEntity.status(404).body("Planta não encontrada");
        }
    }
}