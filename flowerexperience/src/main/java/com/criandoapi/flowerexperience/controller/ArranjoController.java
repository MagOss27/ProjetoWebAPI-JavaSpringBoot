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

import com.criandoapi.flowerexperience.DAO.IArranjo;
import com.criandoapi.flowerexperience.model.Arranjo;
import com.criandoapi.flowerexperience.service.ArranjoService;

@RestController
@CrossOrigin("*")
@RequestMapping("/arranjos")
public class ArranjoController {

    @Autowired
    private IArranjo dao;

    @Autowired
    private ArranjoService service;

    @GetMapping
    public ResponseEntity<List<Arranjo>> listaArranjo() {
        List<Arranjo> listaArranjo = (List<Arranjo>) dao.findAll();
        return ResponseEntity.status(200).body(listaArranjo);
    }

    @PostMapping
    public ResponseEntity<Arranjo> criarArranjo(@RequestBody Arranjo arranjo) {
        Arranjo arranjoNovo = dao.save(arranjo);
        return ResponseEntity.status(201).body(arranjoNovo);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Arranjo> editarArranjo(@PathVariable Integer id, @RequestBody Arranjo arranjo)
            throws IllegalAccessException {
        Arranjo arranjoNovo = service.editarArranjo(id, arranjo);
        return ResponseEntity.status(200).body(arranjoNovo);
    }

      @DeleteMapping("/{id}")
      public ResponseEntity<?> excluirArranjo(@PathVariable Integer id) {
          dao.deleteById(id);
          return ResponseEntity.status(204).build(); // Retorna 204 No Content após exclusão
      }

    @GetMapping("/{id}")
    public ResponseEntity<?> buscarIDArranjo(@PathVariable Integer id) throws IllegalAccessException {
        Optional<Arranjo> arranjo = service.buscarIDArranjo(id);
        if (arranjo.isPresent()) {
            return ResponseEntity.ok(arranjo.get());
        } else {
            return ResponseEntity.status(404).body("Arranjo não encontrado");
        }
    }
}

