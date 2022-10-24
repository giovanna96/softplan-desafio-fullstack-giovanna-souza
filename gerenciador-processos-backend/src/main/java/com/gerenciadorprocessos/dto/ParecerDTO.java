package com.gerenciadorprocessos.dto;

import com.gerenciadorprocessos.model.Parecer;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 * @author Giovanna Severo
 * @since 22/10/2022
 */

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class ParecerDTO {
    private Long idProcesso;
    private String conteudoParecer;

    private boolean parecerExecutado;

    private List<Long> responsavelParecer;

    public Parecer toParecer(){
        return Parecer.builder()
                .conteudoParecer(this.conteudoParecer)
                .parecerExecutado(this.parecerExecutado)
                .build();
    }
}
