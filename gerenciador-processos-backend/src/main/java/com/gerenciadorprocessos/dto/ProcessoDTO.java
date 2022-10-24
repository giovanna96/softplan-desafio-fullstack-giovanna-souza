package com.gerenciadorprocessos.dto;

import com.gerenciadorprocessos.model.Processo;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class ProcessoDTO {
    private String numeroProcesso;

    private String infoProcesso;

    public  Processo toProcesso(){
        return Processo.builder()
                .infoProcesso(this.getInfoProcesso())
                .numeroProcesso(this.getNumeroProcesso()).build();
    }

}
