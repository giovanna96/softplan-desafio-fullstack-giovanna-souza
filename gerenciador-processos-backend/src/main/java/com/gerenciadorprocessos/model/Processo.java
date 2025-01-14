package com.gerenciadorprocessos.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

/**
 * @author Giovanna Severo
 * @since 22/10/2022
 */

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
@Entity
@Table(schema = "public", name = "processo")
public class Processo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_processo")
    private Long id;

    private String numeroProcesso;

    @Lob
    private String infoProcesso;

    private String descProcesso;

}
