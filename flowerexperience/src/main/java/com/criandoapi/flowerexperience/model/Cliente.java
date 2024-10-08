package com.criandoapi.flowerexperience.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "cliente")
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // CAMPO ID, IRÁ SER AUTOINCREMENTADO
    @Column(name = "id")
    private Integer id;

    @Column(name = "nome", length = 200, nullable = true) // COLOCANDO OS ATRIBUTOS IGUAL AO BB
    private String nome;

    @Column(name = "email", length = 50, nullable = true) // COLOCANDO OS ATRIBUTOS IGUAL AO BB
    private String email;

    @Column(name = "senha", columnDefinition = "TEXT", nullable = true) // COLOCANDO OS ATRIBUTOS IGUAL AO BB
    private String senha;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

}
