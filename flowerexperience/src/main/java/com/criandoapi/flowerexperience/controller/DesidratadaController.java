package com.criandoapi.flowerexperience.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.criandoapi.flowerexperience.DAO.IDesidratada;
import com.criandoapi.flowerexperience.model.Desidratada;
import com.criandoapi.flowerexperience.service.DesidratadaService;

@RestController
@CrossOrigin("*") // Permite que o backend aceite requisições de qualquer origem
@RequestMapping("/desidratadas") // Mapeia a URL base para as rotas desse controlador
public class DesidratadaController {

    @Autowired
    private IDesidratada dao; // Injeção de dependência para o DAO da entidade "Desidratada"

    @Autowired
    private DesidratadaService service; // Injeção de dependência do serviço de "Desidratada"

    // Método GET para listar todas as desidratadas
    @GetMapping
    public ResponseEntity<List<Desidratada>> listaDesidratada() {
        List<Desidratada> listaDesidratada = (List<Desidratada>) dao.findAll();
        return ResponseEntity.status(200).body(listaDesidratada);
    }

    // Método POST para criar uma nova desidratada
    @PostMapping
    public ResponseEntity<Desidratada> criarDesidratada(@RequestBody Desidratada desidratada) {
        Desidratada desidratadaNovo = dao.save(desidratada);
        return ResponseEntity.status(201).body(desidratadaNovo);
    }

    // Método PUT para editar uma desidratada existente por ID
    @PutMapping("/{id}")
    public ResponseEntity<Desidratada> editarDesidratada(@PathVariable Integer id, @RequestBody Desidratada desidratada) throws IllegalAccessException{
        Desidratada desidratadaNovo = service.editarDesidratada(id, desidratada);
        return ResponseEntity.status(200).body(desidratadaNovo);
    }

    // Método DELETE para excluir uma desidratada por ID
    @DeleteMapping("/{id}")
    public ResponseEntity<?> excluirDesidratada(@PathVariable Integer id) {
        dao.deleteById(id);
        return ResponseEntity.status(204).build(); // Retorna 204 No Content após exclusão
    }

    // Método GET para buscar uma desidratada por ID
    @GetMapping("/{id}")
    public ResponseEntity<?> buscarIDDesidratada(@PathVariable Integer id) throws IllegalAccessException {
        Optional<Desidratada> desidratada = service.buscarIDDesidratada(id);
        if (desidratada.isPresent()) {
            return ResponseEntity.ok(desidratada.get());
        } else {
            return ResponseEntity.status(404).body("Desidratada não encontrada");
        }
    }

}