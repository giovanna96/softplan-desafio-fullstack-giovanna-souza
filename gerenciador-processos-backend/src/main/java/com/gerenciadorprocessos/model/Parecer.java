package com.gerenciadorprocessos.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Entity
@Table(schema = "public",name = "parecer")
public class Parecer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private Long id;

    private String conteudoParecer;

    private boolean parecerExecutado;

    @OneToOne
    @JoinColumn(name = "id_usuario", nullable = false)
    private Usuario usuarioResponsavel;

    @ManyToOne
    @JoinColumn(name = "id_processo", nullable = false)
    private Processo processo;
}
