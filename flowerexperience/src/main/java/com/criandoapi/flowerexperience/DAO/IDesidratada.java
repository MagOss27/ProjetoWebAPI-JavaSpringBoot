package com.criandoapi.flowerexperience.DAO;

import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import com.criandoapi.flowerexperience.model.Desidratada;

public interface IDesidratada extends CrudRepository<Desidratada, Integer> {

    // comando pega o id
    Optional<Desidratada> findById(Integer id);

}
