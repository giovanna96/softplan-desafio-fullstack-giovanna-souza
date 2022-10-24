package com.gerenciadorprocessos.repository;

import com.gerenciadorprocessos.model.Parecer;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Giovanna Severo
 * @since 22/10/2022
 */

public interface ParecerRepository extends JpaRepository<Parecer, Long> {
}
