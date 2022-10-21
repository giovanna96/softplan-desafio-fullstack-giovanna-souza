package com.gerenciadorprocessos.repository;

import com.gerenciadorprocessos.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

/**
 * @author Giovanna Severo
 * @since 20/10/2022
 */
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Optional<Usuario> findByLogin(String login);
}
