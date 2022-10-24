package com.gerenciadorprocessos.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

/**
 * @author Giovanna Severo
 * @since 20/10/2022
 */
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
@Entity
@Table(schema = "public", name = "usuario")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_usuario")
    private Long id;

    @Column(nullable = false)
    private String nome;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false, unique = true)
    private String login;

    private String senha;

    private boolean usuarioAtivo;

    private String papeis;


}
