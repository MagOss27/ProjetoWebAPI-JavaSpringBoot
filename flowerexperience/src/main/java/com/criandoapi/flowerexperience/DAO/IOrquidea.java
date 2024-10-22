package com.criandoapi.flowerexperience.DAO;

import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import com.criandoapi.flowerexperience.model.Orquidea;

public interface IOrquidea extends CrudRepository<Orquidea, Integer> {

Optional<Orquidea> findById(Integer id);

}
