package com.gerenciadorprocessos.dto;

import com.gerenciadorprocessos.model.Processo;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class ProcessoRespostaDTO {
    private Long id;

    private String numeroProcesso;

    private String infoProcesso;

    public static ProcessoRespostaDTO processoToDTO(Processo processo){
        return ProcessoRespostaDTO.builder()
                .id(processo.getId())
                .numeroProcesso(processo.getNumeroProcesso())
                .infoProcesso(processo.getInfoProcesso())
                .build();

    }
}
