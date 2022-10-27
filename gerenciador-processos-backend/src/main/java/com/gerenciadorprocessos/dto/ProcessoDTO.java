package com.gerenciadorprocessos.dto;

import com.gerenciadorprocessos.model.Processo;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author Giovanna Severo
 * @since 22/10/2022
 */

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class ProcessoDTO {
    private String numeroProcesso;

    private String infoProcesso;

    private String descProcesso;

    public  Processo toProcesso(){
        return Processo.builder()
                .infoProcesso(this.getInfoProcesso())
                .descProcesso(this.getDescProcesso())
                .numeroProcesso(this.getNumeroProcesso()).build();
    }

}
