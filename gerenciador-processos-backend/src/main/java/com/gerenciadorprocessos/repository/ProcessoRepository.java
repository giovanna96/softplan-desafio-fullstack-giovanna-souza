package com.gerenciadorprocessos.repository;

import com.gerenciadorprocessos.model.Processo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProcessoRepository extends JpaRepository<Processo,Long> {
    @Query(value = "SELECT p.processo FROM Parecer p INNER JOIN p.processo WHERE p.parecerExecutado = false and p.usuarioResponsavel.login = :login " )
    List<Processo> findAllSemParecer(String login);
}
