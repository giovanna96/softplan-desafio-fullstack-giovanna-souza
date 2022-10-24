package com.gerenciadorprocessos.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
@Entity
@Table(schema = "public", name = "processo")
public class Processo {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_processo")
    private Long id;

    private String numeroProcesso;

    private String infoProcesso;

    @OneToMany
    private List<Parecer> parecerList;

}
