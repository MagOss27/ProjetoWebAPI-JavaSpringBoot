package com.criandoapi.flowerexperience.DAO;

import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import com.criandoapi.flowerexperience.model.Arranjo;

public interface IArranjo extends CrudRepository<Arranjo, Integer> {

Optional<Arranjo> findById(Integer id);

}
