package com.criandoapi.flowerexperience.DAO;

import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import com.criandoapi.flowerexperience.model.Planta;


public interface IPlanta extends CrudRepository<Planta, Integer> {

    //comando pega o id
    Optional<Planta> findById(Integer id);
    
} 


