package com.kitri.solo.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class ResponseDtoBoard {
    Long boardid;
    String title;
    String writer;
    LocalDateTime createdAt;
    LocalDateTime modifiedAt;
    String content;
    Long commentcount;
    Long likecount;
    Long memberid;
}
