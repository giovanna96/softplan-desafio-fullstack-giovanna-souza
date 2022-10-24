package com.gerenciadorprocessos.repository;

import com.gerenciadorprocessos.model.Parecer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ParecerRepository extends JpaRepository<Parecer, Long> {
}
