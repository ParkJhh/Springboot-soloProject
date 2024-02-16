package com.kitri.solo.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class RequestDtoBoard {
    String title;
    String writer;
    String content;
    Long memberid;
}
