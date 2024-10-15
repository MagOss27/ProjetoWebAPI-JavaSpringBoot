package com.criandoapi.flowerexperience.DAO;

import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import com.criandoapi.flowerexperience.model.Cliente;

public interface ICliente extends CrudRepository<Cliente, Integer> {

    
    // validação da tela de login
    Optional<Cliente> findByEmailAndSenha(String email, String senha);

    //buscar por id
    Optional<Cliente> findById(Integer id);

}
