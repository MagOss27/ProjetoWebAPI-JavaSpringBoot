package com.criandoapi.flowerexperience.DAO;

import org.springframework.data.repository.CrudRepository;
import com.criandoapi.flowerexperience.model.Cliente;

public interface ICliente extends CrudRepository<Cliente, Integer> {

}
